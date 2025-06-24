import React from 'react'

const PlansFeatureCard = ({ icon, title , details}) => {
    return (
        <>
            <div className="rounded-md border border-gray-300 shadow-md shadow-gray-300 px-6 py-10 text-center space-y-3 hover:shadow-xl duration-300 bg-white">
                <div className="w-18 h-18 mx-auto">
                    <img src={icon} alt="Icon" className='w-full' />
                </div>
                <h4 className='text-lg font-semibold text-blue-950'> {title} </h4>
                <p className='text-base text-gray-500'> {details} </p>
            </div>
        </>
    )
}

export default PlansFeatureCard