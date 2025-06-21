import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const RightServicesCard = ({image,title,to}) => {
  return (
    <>
        <div className="p-5 bg-white border border-gray-300 rounded-md duration-300 hover:shadow-lg hover:shadow-gray-300 text-center space-y-2">
            <div className="w-21 mx-auto">
                <img src={image} alt="" />
            </div>
            <h4 className='text-lg font-semibold text-blue-950'> {title} </h4>
            <span className='bg-blue-500 py-[1px] block w-[40%] mx-auto'></span>
            <Link to={to} className='text-base font-semibold cursor-pointer justify-center text-blue-950 flex items-center gap-1 duration-300 hover:text-blue-500'>View Plans <FaArrowRight/> </Link>
        </div>
    </>
  )
}

export default RightServicesCard