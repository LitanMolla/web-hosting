import React from 'react'
import Container from './Container'
import hero from '../assets/images/hero.svg'
const Hero = () => {
  return (
    <>
        <section className='bg-gray-100 md:pt-50 md:pb-38 pb-20 pt-40'>
            <Container>
                <div className="flex md:flex-row flex-col-reverse justify-between items-center">
                    <div className="md:w-[60%] md:space-y-8 space-y-5 max-w-120 md:max-w-none">
                        <h1 className='font-bold md:text-5xl text-3xl md:leading-17 leading-10'>We Handle the Tech, You Focus on Business</h1>
                        <p className='text-base text-blue-950'>Let us take care of your website’s hosting, security, and performance while you focus on scaling your business. Grow with confidence—we’ve got the tech covered!</p>
                        <div className="space-x-3 space-y-3">
                            <button className='px-9 py-3 bg-blue-500 text-base text-white border border-gray-100 cursor-pointer duration-300 hover:bg-blue-950 rounded-md hover:ring-4 hover:ring-gray-300 md:inline-block block w-full md:w-auto'>Get Started Now</button>
                            <button className='px-9 py-3  text-base text-white border border-gray-100 cursor-pointer duration-300 bg-blue-950 rounded-md hover:ring-4 hover:ring-gray-300 md:inline-block block w-full md:w-auto'>Talk to an Expert</button>
                        </div>
                    </div>
                    <div className="md:w-[40%] mb-10 md:mb-0 max-w-100 md:max-w-none">
                        <img src={hero} alt="Hero img" className='w-full' />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Hero