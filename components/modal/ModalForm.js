// import { useState, useRef, useEffect } from "react";
// import { IoMdClose } from "react-icons/io";
// import React from 'react';



// export default function ModalForm({ setOpenModal, reff }) {
//     const [inputs, setInputs] = useState({ name: "", mobile: "", email: ""});
//     const [submitResponse, setSubmitResponse] = useState({})
//     const [className, setClassName] = useState(undefined);
//     const [city, setCity] = useState(undefined);

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }))
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         inputs["className"]=className
//         inputs["city"]=city
//         try {
//             fetch("http://localhost:3000/api/posts/route", {
//                 method: "POST",
//                 body: JSON.stringify(inputs),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8"
//                 }
//             })
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setSubmitResponse(json)
//                     if (json.success) {
//                         setTimeout(() => {
//                             setOpenModal(false)
//                         }, 1000);
//                     }
//                 });

//         } catch (error) {
//             setSubmitResponse(error.response.data)
//         }
//     }




//     const classOptions = [
//         "1st",
//         "2nd",
//         "3rd",
//         "4th",
//         "5th",
//         "6th",
//         "7th",
//         "8th",
//         "9th",
//         "10th",
//         "11th",
//         "12th"
//       ];

//     const cityOptions = [
//         "Mumbai",
//         "Delhi",
//         "Bangalore",
//         "Hyderabad",
//         "Ahmedabad",
//         "Chennai",
//         "Kolkata",
//         "Surat",
//         "Pune",
//         "Jaipur",
//         "Lucknow",
//         "Kanpur",
//         "Nagpur",
//         "Indore",
//         "Thane",
//         "Bhopal",
//         "Visakhapatnam",
//         "Vadodara",
//         "Ghaziabad",
//         "Ludhiana",
//         "Agra",
//         "Nashik",
//         "Faridabad",
//         "Meerut",
//         "Rajkot",
//         "Kalyan-Dombivli",
//         "Vasai-Virar",
//         "Varanasi",
//         "Srinagar",
//         "Aurangabad",
//         "Dhanbad",
//         "Amritsar",
//         "Navi Mumbai",
//         "Allahabad (Prayagraj)",
//         "Howrah",
//         "Gwalior",
//         "Jabalpur",
//         "Coimbatore",
//         "Vijayawada",
//         "Jodhpur",
//         "Madurai",
//         "Raipur",
//         "Kota",
//         "Guwahati",
//         "Chandigarh",
//         "Solapur",
//         "Hubballi-Dharwad",
//         "Mysuru (Mysore)",
//         "Tiruchirappalli",
//         "Bareilly",
//         "Aligarh",
//         "Tiruppur",
//         "Moradabad",
//         "Jalandhar",
//         "Bhubaneswar",
//         "Salem",
//         "Warangal",
//         "Guntur",
//         "Bhiwandi",
//         "Saharanpur",
//         "Gorakhpur",
//         "Bikaner",
//         "Amravati",
//         "Noida",
//         "Jamshedpur",
//         "Bhilai",
//         "Cuttack",
//         "Firozabad",
//         "Kochi",
//         "Dehradun",
//         "Durgapur",
//         "Ajmer",
//         "Ulhasnagar",
//         "Jhansi",
//         "Siliguri",
//         "Asansol",
//         "Nanded",
//         "Jammu",
//         "Nellore",
//         "Mangalore",
//         "Belagavi (Belgaum)",
//         "Udaipur",
//         "Tirunelveli",
//         "Muzaffarnagar",
//         "Malegaon",
//         "Gaya",
//         "Tirupati",
//         "Davanagere",
//         "Hisar",
//         "Gwalior",
//         "Haridwar",
//         "Bardhaman",
//         "Saharanpur",
//         "Patna",
//         "Ranchi",
//         "Shimla",
//         "Panaji"
//       ];

//     const onCLassNameOptionChangeHandler = (event) => {
//         setClassName(event.target.value);

//     };
//     const onCityOptionChangeHandler = (event) => {
//         setCity(event.target.value);

//     };
//     return (

//         <div className="fixed z-50 bg-opacity-50 h-full w-full flex justify-center items-center bg-black">
//             <div ref={reff} className="bg-white rounded-xl flex flex-col items-center gap-0  sm:gap-3 sm:px-12 sm:py-4">
//                 <div className=" w-full" >
//                     <IoMdClose className="hover:cursor-pointer ml-[89%] sm:ml-[100%] h-7 w-7 mt-1 sm:h-8 sm:w-8" onClick={() => setOpenModal(false)} />
//                 </div>
//                 <form onSubmit={handleSubmit} className="bg-white rounded-xl flex flex-col  gap-5 px-10 pb-4 pt-2 sm:px-12" >
//                     <label>Name<span className="text-red-400 ml-1">*</span>
//                         <input
//                             className="border-2 ml-2 rounded-md pl-1 py-1 w-52 sm:w-96  text-sm"
//                             placeholder="Enter your name ...."
//                             type="text"
//                             name="name"
//                             value={inputs.name || ""}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <label>Class<span className="text-red-400 ml-1">*</span>
//                         {/* <input
//                             className="border-2 ml-2 rounded-md pl-1 py-1 w-52 sm:w-96  text-sm"
//                             placeholder="Enter your class ...."
//                             type="text"
//                             name="className"
//                             value={inputs.className || ""}
//                             onChange={handleChange}
//                         /> */}
//                         <select className="border-2 ml-2 text-gray-400 py-0.5 rounded-md w-52 sm:w-96" onChange={onCLassNameOptionChangeHandler}>
//                             <option className="">Select</option>
//                             {classOptions.map((option, index) => {
//                                 return (
//                                     <option key={index}>
//                                         {option}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </label>
//                     <label>Mobile<span className="text-red-400 ml-1">*</span>
//                         <input
//                             className="border-2 ml-2 rounded-md pl-1 py-1 w-52 sm:w-96 text-sm"
//                             placeholder="Enter mobile no. ...."
//                             type="text"
//                             name="mobile"
//                             value={inputs.mobile || ""}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <label>Email<span className="text-red-400 ml-1">*</span>
//                         <input
//                             className="border-2 ml-2 rounded-md pl-1 py-1 w-52 sm:w-96 text-sm"
//                             placeholder="Enter city ...."
//                             type="text"
//                             name="email"
//                             value={inputs.email || ""}
//                             onChange={handleChange}
//                         />
//                     </label>
//                     <label>City<span className="text-red-400 ml-1">*</span>
//                         {/* <input
//                             className="border-2 ml-2 rounded-md pl-1 py-1 w-52 sm:w-96 text-sm"
//                             placeholder="Enter city ...."
//                             type="text"
//                             name="city"
//                             value={inputs.city || ""}
//                             onChange={handleChange}
//                         /> */}
//                         <select className="border-2 ml-2 text-gray-400 py-0.5 rounded-md w-52 sm:w-96" onChange={onCityOptionChangeHandler}>
//                             <option className="">Select</option>
//                             {cityOptions.map((option, index) => {
//                                 return (
//                                     <option key={index}>
//                                         {option}
//                                     </option>
//                                 );
//                             })}
//                         </select>
//                     </label>
//                     <div className="flex flex-col items-center">
//                         {submitResponse.success ? <p className="text-green-500">{submitResponse.message}</p> : <p className="text-red-500">{submitResponse.message}</p>}
//                         <input type="submit" className="bg-blue-600 text-sm w-fit hover:cursor-pointer text-white px-4 py-2 mt-4 sm:mt-6 rounded-full" />
//                     </div>
//                 </form>
//             </div>

//         </div>
//     )
// }

import React, { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";

const classOptions = [
    "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th",
    "9th", "10th", "11th", "12th"
];

const cityOptions = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai",
    "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur",
    "Indore", "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Ghaziabad",
    "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
    "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
    "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad (Prayagraj)", "Howrah",
    "Gwalior", "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai",
    "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad",
    "Mysuru (Mysore)", "Tiruchirappalli", "Bareilly", "Aligarh", "Tiruppur",
    "Moradabad", "Jalandhar", "Bhubaneswar", "Salem", "Warangal", "Guntur",
    "Bhiwandi", "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida",
    "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Dehradun",
    "Durgapur", "Ajmer", "Ulhasnagar", "Jhansi", "Siliguri", "Asansol",
    "Nanded", "Jammu", "Nellore", "Mangalore", "Belagavi (Belgaum)",
    "Udaipur", "Tirunelveli", "Muzaffarnagar", "Malegaon", "Gaya", "Tirupati",
    "Davanagere", "Hisar", "Gwalior", "Haridwar", "Bardhaman", "Saharanpur",
    "Patna", "Ranchi", "Shimla", "Panaji"
];

const ModalForm = ({ setOpenModal, reff }) => {
    const [formData, setFormData] = useState({
        name: "",
        class: "",
        mobile: "",
        email: "",
        city: ""
    });

    const [errors, setErrors] = useState({});
    const [submitResponse, setSubmitResponse] = useState({})

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.class) newErrors.class = "Class is required";
        if (!formData.mobile.match(/^[6-9]\d{9}$/))
            newErrors.mobile = "Enter a valid 10-digit mobile number";
        if (
            !formData.email.match(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            )
        )
            newErrors.email = "Enter a valid email address";
        if (!formData.city) newErrors.city = "City is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            formData["className"] = formData.class
            delete formData.class
            try {
                fetch("https://api.penpencil.co/pi-os-backend/v1/user/query", {
                    method: "POST",
                    body: JSON.stringify(formData),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8"
                    }
                })
                    .then((response) => response.json())
                    .then((json) => {
                        setSubmitResponse(json)
                        // if (json.data.success) {
                            setTimeout(() => {
                                setOpenModal(false)
                            }, 1000);
                        // }
                    });
                    
            } catch (error) {
                setSubmitResponse(error.response.data)
            }
            setFormData({
                name: "",
                class: "",
                mobile: "",
                email: "",
                city: ""
            });
        }
    };
    console.log(submitResponse,"submit Response")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="fixed z-50 bg-opacity-50  w-full h-screen flex justify-center  items-center bg-black">
            <div ref={reff} className="w-[90%] md:w-[70%] lg:w-[40%] mx-auto bg-white p-8 border-2 shadow-md rounded-md relative">
                {/* <h2 className="text-2xl font-bold mb-6 text-center">Registration Form</h2> */}
                {/* <div className=" w-full" > */}
                <IoMdClose className="hover:cursor-pointer absolute text-black right-1 top-0 ml-[89%] sm:ml-[100%] h-7 w-7 mt-1 sm:h-8 sm:w-8" onClick={() => setOpenModal(false)} />
                {/* </div> */}
                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-2">
                        <label className="block text-gray-700  font-medium mb-0">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                    </div>

                    {/* Class */}
                    <div className="mb-2">
                        <label className="block text-gray-700 font-medium mb-0">Class</label>
                        <select
                            name="class"
                            value={formData.class}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a class</option>
                            {classOptions.map((cls) => (
                                <option key={cls} value={cls}>
                                    {cls}
                                </option>
                            ))}
                        </select>
                        {errors.class && <p className="text-red-500 text-xs">{errors.class}</p>}
                    </div>

                    {/* Mobile */}
                    <div className="mb-0">
                        <label className="block text-gray-700 font-medium mb-0">Mobile</label>
                        <input
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile}</p>}
                    </div>

                    {/* Email */}
                    <div className="mb-2">
                        <label className="block text-gray-700 font-medium mb-0">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    {/* City */}
                    <div className="mb-2">
                        <label className="block text-gray-700 font-medium mb-0">City</label>
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select a city</option>
                            {cityOptions.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                        {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex flex-col justify-center items-center mt-4">
                        {submitResponse?.data?.success ?
                            <p className="text-green-600">{submitResponse.data?.message}</p>
                            :
                            <p className="text-red-600">{submitResponse.data?.message}</p>
                        }
                        <button
                            type="submit"
                            className="align-middle bg-blue-500 w-[50%] text-white py-2 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;
