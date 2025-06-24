import React from 'react'

const FAQ = ({title,details}) => {
    return (
        <>
            <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                <h4 className='text-2xl font-semibold text-blue-950'> {title} </h4>
                <p className='text-base text-gray-500'> {details} </p>
            </div>
        </>
    )
}

export default FAQ