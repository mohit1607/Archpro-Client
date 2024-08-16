import { HiFilter } from "react-icons/hi"; 
import React from 'react'
import Card from "../components/Card";

const page = () => {

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];


  return (
    <div className='w-full flex flex-col justify-center gap-8 relative pt-4 px-[10%]'>
        <div className='w-full bg-red-200 px-4  h-[5rem] sticky top-20 z-[10] flex items-center border rounded-lg overflow-auto gap-3'>
            {/* <h2 className="flex gap-2 font-semibold text-sm"><HiFilter size={20} color={'#212121'}/> Filters</h2> */}
            
             
              {/* <select className="select select-bordered w-[8rem] max-w-xs bg-white">
                <option disabled selected>State</option>
                {
                  statesOfIndia.map((curr, index) => (
                    <option key={curr+index}>{curr}</option>
                  ))
                }
              </select>
              <select className="select select-bordered w-[8rem] max-w-xs bg-white">
                <option disabled selected>Normal</option>
                <option>Normal Apple</option>
                <option>Normal Orange</option>
                <option>Normal Tomato</option>
              </select>
              <select className="select select-bordered w-[8rem] max-w-xs bg-white">
                <option disabled selected>Normal</option>
                <option>Normal Apple</option>
                <option>Normal Orange</option>
                <option>Normal Tomato</option>
              </select> */}
              <label className="input input-bordered flex items-center gap-2 bg-white">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
                </svg>
              </label>
        </div>
        <div className='flex-1 flex justify-between items-start flex-wrap pt-16'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default page