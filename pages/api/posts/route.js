import { NextResponse } from "next/server";
import connect from "../../../lib/mongodb"
import QueryInfo from "../../../models/QueryInfo";
import clientPromise from "../../../lib/mongodb";
var validator = require("email-validator");
import { isValidPhoneNumber } from 'libphonenumber-js';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({ message: 'Fetching posts' });
    } else if (req.method === 'POST') {
        console.log()
        try {
            const client = await clientPromise;
            const db = client.db('piBookBuyNow');

            const {name,className,mobile,email,city} = req.body
           
            if (!name) {
                return res.status(400).json({success:false, message: 'name is required.' });
            }
            if (!className) {
                return res.status(400).json({success:false, message: 'className is required.' });
            }
            if (!mobile) {
                return res.status(400).json({success:false, message: 'mobile is required.' });
            }
            if (!email) {
                return res.status(400).json({success:false, message: 'email is required.' });
            }
            if (!city) {
                return res.status(400).json({success:false, message: 'city is required.' });
            }
            if (!validator.validate(email)) {
                return res.status(400).json({success:false, message: 'Enter valid email.' });
            }
            if (!isValidPhoneNumber(mobile, 'US')) { 
                return res.status(400).json({success:false, message: 'Enter valid Mobile Number.' });
              } 
            const existingEmail = await db.collection('piBookBuyNow').findOne({ email });
            if (existingEmail) {
                return res.status(400).json({success:false, message: 'Email already exists' });
            }
            // Check if the mobile number already exists
            const existingMobile = await db.collection('piBookBuyNow').findOne({ mobile });
            if (existingMobile) {
                return res.status(400).json({success:false, message: 'Mobile number already exists' });
            }
            const result = await db.collection('piBookBuyNow').insertOne({ name, className, mobile, email, city });

            res.status(201).json({ success:true, message: 'Form Submitted successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({success:false, message: 'Failed to Submit.' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
