import React from 'react'
import Container from './Container'
import { TbWorld , TbWorldCode } from "react-icons/tb";

const WebsiteSetupAndMigration = () => {
    return (
        <>
            <section className='bg-gray-100'>
                <Container>
                    <div className="flex md:flex-row flex-col justify-between px-10 md:px-0">
                        <div className="space-y-5 md:w-[45%]">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 h-20 w-20 rounded-md flex justify-center items-center">
                                    <TbWorld className='text-blue-500 text-6xl' />
                                </div>
                                <h4 className='text-blue-950 font-semibold text-2xl'>Start a New Website</h4>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>Go Live Instantly</h4>
                                <p className='text-base text-gray-500'>Now you can launch your website in minutes with our hassle-free setup. We provide the tools you need to get online effortlessly with our best Cloud Hosting Solution.</p>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>Scalability on Demand</h4>
                                <p className='text-base text-gray-500'>As your business grows, your website should too! Our flexible Cloud Hosting Solution lets you scale website resources instantly to match your needs.</p>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>User-Friendly Control Panel</h4>
                                <p className='text-base text-gray-500'>Manage your website with ease using our intuitive control panel. No technical skills required—just simple, smooth website management!</p>
                            </div>
                        </div>

                        <div className="md:w-[10%] hidden md:flex justify-center">
                            <span className='bg-gray-300 w-[1px]'></span>
                        </div>

                        <div className="space-y-5 md:w-[45%] mt-10 md:mt-0">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 h-20 w-20 rounded-md flex justify-center items-center">
                                    <TbWorldCode  className='text-blue-500 text-6xl' />
                                </div>
                                <h4 className='text-blue-950 font-semibold text-2xl'> Migrate Fast and Free</h4>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>Expert-Assisted Migration</h4>
                                <p className='text-base text-gray-500'>If you are planning to switch hosting providers? Our team ensures a seamless, stress-free transfer with zero downtime. Your business stays online during the transfer process.</p>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>Maximum Efficiency, Zero Downtime</h4>
                                <p className='text-base text-gray-500'>Let’s enjoy uninterrupted service during migration with our advanced tools that keep your website running smoothly. Check out our Cloud Hosting plans & enjoy the best services.</p>
                            </div>
                            <div className="">
                                <h4 className='text-lg font-semibold text-blue-950'>Unused Hosting Credit Compensation</h4>
                                <p className='text-base text-gray-500'>Get compensated for unused hosting months when you switch to Max Cloud Host. Enjoy a seamless transition with no wasted investment.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pb-20"></div>
                </Container>
            </section>
        </>
    )
}

export default WebsiteSetupAndMigration