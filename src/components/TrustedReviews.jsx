import React from 'react'
import Container from './Container'
import stars from '../assets/images/stars-trustpilot.svg'
import trustpilot from '../assets/images/trustpilot-logo.svg'

const TrustedReviews = () => {
  return (
    <>
        <section className='bg-blue-100 py-12 md:py-20'>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8'>Trusted by 600+ Customers WorldWide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="max-w-full px-4 py-6 rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 bg-white space-y-3">
                            <div className="flex justify-between items-center">
                                <img src={trustpilot} alt="trustpilot" className='w-25' />
                                <img src={stars} alt="trustpilot" className='w-22' />
                            </div>
                            <h4 className='text-lg font-semibold text-blue-950'>Amazing support by the Dhaka Cloud</h4>
                            <p className='text-base text-gray-500'>Amazing support by the Max Cloud Host team. Sumit Quick helped me migrate data from another server to my server. I...</p>
                            <div className="mt-8">
                                <hr className=' border-gray-300 my-2'/>
                                <p className='text-sm text-gray-500'>Litan Molla</p>
                            </div>
                        </div>
                        <div className="max-w-full px-4 py-6 rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 bg-white space-y-3">
                            <div className="flex justify-between items-center">
                                <img src={trustpilot} alt="trustpilot" className='w-25' />
                                <img src={stars} alt="trustpilot" className='w-22' />
                            </div>
                            <h4 className='text-lg font-semibold text-blue-950'>Amazing support by the Dhaka Cloud</h4>
                            <p className='text-base text-gray-500'>Amazing support by the Max Cloud Host team. Sumit Quick helped me migrate data from another server to my server. I...</p>
                            <div className="mt-8">
                                <hr className=' border-gray-300 my-2'/>
                                <p className='text-sm text-gray-500'>Litan Molla</p>
                            </div>
                        </div>
                        <div className="max-w-full px-4 py-6 rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 bg-white space-y-3">
                            <div className="flex justify-between items-center">
                                <img src={trustpilot} alt="trustpilot" className='w-25' />
                                <img src={stars} alt="trustpilot" className='w-22' />
                            </div>
                            <h4 className='text-lg font-semibold text-blue-950'>Amazing support by the Dhaka Cloud</h4>
                            <p className='text-base text-gray-500'>Amazing support by the Max Cloud Host team. Sumit Quick helped me migrate data from another server to my server. I...</p>
                            <div className="mt-8">
                                <hr className=' border-gray-300 my-2'/>
                                <p className='text-sm text-gray-500'>Litan Molla</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-center flex mt-12">
                        <button className={`px-9 py-3 bg-blue-500 text-base text-white border border-gray-100 cursor-pointer duration-300 hover:bg-blue-950 rounded-md hover:ring-4 hover:ring-gray-300 md:inline-block block w-full md:w-auto mx-auto`}> Read More Reviews </button>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default TrustedReviews