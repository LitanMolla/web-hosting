import React, { useState } from 'react'
import Container from './Container'

const VPSSection = () => {
    const [currency, setCurrency] = useState('USD')
  return (
    <>
        <section className='md:py-25 py-12 bg-gray-100 '>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center'>Choose Your Best Linux VPS Hosting Plans</h2>
                    <div className="flex justify-center mb-2 my-12">
                        <div className="bg-white p-4 rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 text-center">
                            <p className='text-base text-blue-950 font-medium mb-2'>Select Currency</p>
                            <div className="flex gap-3">
                                <button onClick={()=>setCurrency('USD')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'USD' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>USD</button>
                                    <button onClick={()=>setCurrency('BDT')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'BDT' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>BDT</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default VPSSection