import React from 'react'
import Container from './Container'
import almalinux from '../assets/images/almalinux.svg'
import rocky from '../assets/images/rocky-linux.svg'
import ubuntu from '../assets/images/ubuntu.svg' 
import fedora from '../assets/images/fedora.svg' 
import debian from '../assets/images/debian.svg' 

const OperatingSystem = () => {
  return (
    <>
        <section className='md:py-25 py-12 bg-blue-100 '>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Your Choice of Linux Operating System</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
                        {/* items */}
                        <div className="bg-white border border-gray-100 p-6 rounded-md hover:shadow-lg hover:shadow-gray-300 duration-300 w-70 md:max-w-full flex justify-center items-center">
                            <div className="w-30 m-auto">
                                <img src={almalinux} alt="Os Img" className='w-full' />
                            </div>
                        </div>
                        {/* items */}
                        <div className="bg-white border border-gray-100 p-6 rounded-md hover:shadow-lg hover:shadow-gray-300 duration-300 w-70 md:max-w-full flex justify-center items-center">
                            <div className="w-30 m-auto">
                                <img src={rocky} alt="Os Img" className='w-full' />
                            </div>
                        </div>
                        {/* items */}
                        <div className="bg-white border border-gray-100 p-6 rounded-md hover:shadow-lg hover:shadow-gray-300 duration-300 w-70 md:max-w-full flex justify-center items-center">
                            <div className="w-30 m-auto">
                                <img src={ubuntu} alt="Os Img" className='w-full' />
                            </div>
                        </div>
                        {/* items */}
                        <div className="bg-white border border-gray-100 p-6 rounded-md hover:shadow-lg hover:shadow-gray-300 duration-300 w-70 md:max-w-full flex justify-center items-center">
                            <div className="w-30 m-auto">
                                <img src={fedora} alt="Os Img" className='w-full' />
                            </div>
                        </div>
                        {/* items */}
                        <div className="bg-white border border-gray-100 p-6 rounded-md hover:shadow-lg hover:shadow-gray-300 duration-300 w-70 md:max-w-full flex justify-center items-center">
                            <div className="w-30 m-auto">
                                <img src={debian} alt="Os Img" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default OperatingSystem