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