import React from 'react'
import { Link } from 'react-router-dom'

const HeroBtn = ({text,to,className}) => {
    return (
        <>
            <Link to={to}>
                <button className={`px-9 py-3 bg-blue-500 text-base text-white border border-gray-100 cursor-pointer duration-300 hover:bg-blue-950 rounded-md hover:ring-4 hover:ring-gray-300 md:inline-block block w-full md:w-auto ${className}`}> {text} </button>
            </Link>
        </>
    )
}

export default HeroBtn