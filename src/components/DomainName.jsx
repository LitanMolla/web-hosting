import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'

const DomainName = () => {
  return (
    <>
        <section className='bg-blue-100 py-21'>
            <Container>
                <div className="w-4/5 mx-auto text-center space-y-3 md:space-y-4">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center'>Get The Perfect Domain Name</h2>
                    <p className='text-base text-blue-950'>All extensions from .net to .org are available here. Choose your domain with us today! If you already own a domain then transfer your domain and enjoy amazing benefits!</p>
                    <div className="relative w-4/5 mx-auto">
                        <input type="text" placeholder='Search your domain name' className='w-full outline-0 p-5 bg-white text-blue-950 rounded-md border border-gray-300'/>
                        <button className='text-white text-base bg-blue-500 duration-300 hover:bg-blue-700 py-3 px-10 cursor-pointer rounded-md border border-white hover:ring-4 hover:ring-gray-300 static md:absolute top-1/2 right-2 md:-translate-y-1/2 mt-3 md:mt-0 w-full md:w-auto'>Search</button>
                    </div>
                    <div className="space-x-3 flex justify-center">
                        <Link className='text-base text-blue-500 hover:text-blue-700 duration-300 cursor-pointer'>View Price</Link>
                        <p className='font-light'>|</p>
                        <Link className='text-base text-blue-500 hover:text-blue-700 duration-300 cursor-pointer'>Transfer Domain</Link>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default DomainName