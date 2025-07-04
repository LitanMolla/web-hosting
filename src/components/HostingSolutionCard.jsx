import React from 'react'
import { Link } from 'react-router-dom'

const HostingSolutionCard = ({ image, title, description, to }) => {
    return (
        <>
            <div className="sm:w-96 max-w-full bg-white p-7 space-y-3 rounded-md border border-gray-200 duration-300 hover:shadow-xl hover:shadow-gray-300 hover:scale-105">
                <div className="w-25 mx-auto">
                    <img src={image} alt="Card Icon" className='w-full' />
                </div>
                <h4 className='font-bold text-2xl text-center text-blue-950'> {title} </h4>
                <p className='text-center text-base text-gray-500'> {description} </p>
                <Link to={to} className='block bg-blue-500 duration-300 hover:bg-blue-950 text-white text-base rounded-md text-center py-2.5 mt-4'>View Plans</Link>
            </div>
        </>
    )
}

export default HostingSolutionCard