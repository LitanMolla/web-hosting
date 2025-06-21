import React from 'react'
import Container from './Container'
import { FaServer, FaBriefcase, FaUsers } from "react-icons/fa";

const Success = () => {
    return (
        <>
            <section className='bg-blue-100 py-12'>
                <Container>
                    {/* Desktop */}
                    <div className="md:flex md:flex-row flex-col justify-between gap-10 hidden">
                        <div className="flex items-center gap-4">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaServer className='text-white text-5xl' />
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-semibold text-blue-950'>1800+</h4>
                                <p className='text-base text-gray-500'>Website Hosted</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaUsers className='text-white text-5xl' />
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-semibold text-blue-950'>700+</h4>
                                <p className='text-base text-gray-500'>Happy Customers Worldwide</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaBriefcase className='text-white text-5xl' />
                            </div>
                            <div className="">
                                <h4 className='text-[28px] font-semibold text-blue-950'>6+</h4>
                                <p className='text-base text-gray-500'>Years of Experience</p>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className="space-y-8 block md:hidden">
                        <div className="flex flex-col items-center">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaServer className='text-white text-5xl' />
                            </div>
                            <h4 className='text-[28px] font-semibold text-blue-950'>1800+</h4>
                            <p className='text-base text-gray-500'>Website Hosted</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaUsers className='text-white text-5xl' />
                            </div>
                            <h4 className='text-[28px] font-semibold text-blue-950'>700+</h4>
                            <p className='text-base text-gray-500'>Happy Customers Worldwide</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="h-20 w-20 flex justify-center items-center rounded-md bg-gradient-to-t from-blue-700 to-blue-500">
                                <FaBriefcase className='text-white text-5xl' />
                            </div>
                            <h4 className='text-[28px] font-semibold text-blue-950'>6+</h4>
                            <p className='text-base text-gray-500'>Years of Experience</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Success