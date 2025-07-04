import React, { useState } from 'react'
import Container from './Container'
import VPSCard from './VPSCard'

const VPSSection = () => {
    const VPSPackages = [
        {
            name: 'ENTRY VPS SERVER',
            price: {
                USD: '9.00',
                BDT: '1080.00',
            },
            core: '1 Core',
            ram: '2 GB',
            storage: '25 GB',
            bandwidth: '1 TB',
            ip: '1',
            location: 'BDIX',
            to: '/'
        },
        {
            name: 'ENTRY PLUS VPS',
            price: {
                USD: '14.00',
                BDT: '1680.00',
            },
            core: '2 Core',
            ram: '2 GB',
            storage: '40 GB',
            bandwidth: '1 TB',
            ip: '1',
            location: 'BDIX',
            to: '/'
        },
        {
            name: 'BASIC VPS',
            price: {
                USD: '21.00',
                BDT: '2520.00',
            },
            core: '2 Core',
            ram: '4 GB',
            storage: '75 GB',
            bandwidth: '2 TB',
            ip: '1',
            location: 'BDIX',
            to: '/'
        },
        {
            name: 'STANDARD VPS',
            price: {
                USD: '9.00',
                BDT: '4800.00',
            },
            core: '4 Core',
            ram: '8 GB',
            storage: '150 GB',
            bandwidth: '3 TB',
            ip: '2',
            location: 'BDIX',
            to: '/'
        },
    ]
    const [currency, setCurrency] = useState('USD');
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
                                    <button onClick={() => setCurrency('USD')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'USD' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>USD</button>
                                    <button onClick={() => setCurrency('BDT')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'BDT' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>BDT</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 mt-6">
                            {
                                VPSPackages.map((item, index) => (
                                    <VPSCard
                                        name={item.name}
                                        price={`${currency === 'USD' ? `$${item.price.USD}/mo` : `৳${item.price.BDT}/mo`}`}
                                        core={item.core}
                                        ram={item.ram}
                                        storage={item.storage}
                                        bandwidth={item.bandwidth}
                                        ip={item.ip}
                                        to={item.to}
                                        location={item.location}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VPSSection