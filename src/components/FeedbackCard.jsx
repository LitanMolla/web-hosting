import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";

const FeedbackCard = ({image,name,company,feedback}) => {
  return (
    <>
        <div className="bg-white rounded-md duration-300 hover:shadow-xl hover:shadow-gray-300 p-11 max-w-full text-center space-y-2 overflow-hidden">
            <div className="w-20 p-[2px] mx-auto border border-gray-300 rounded-md">
                <img src={image} alt="Client Photo" className='w-full' />
            </div>
            <h3 className='text-lg font-medium text-blue-950'> {name} </h3>
            <h4 className='text-base text-gray-500 mb-3'> {company} </h4>
            <FaQuoteLeft className='text-blue-500 mx-auto text-4xl' />
            <p className='text-base text-gray-500'> {feedback} </p>
        </div>
    </>
  )
}

export default FeedbackCard