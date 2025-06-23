import React from 'react'
import Container from './Container'
import vpsImg from '../assets/images/linux-vps-hosting-hero.svg'
import HeroBtn from './HeroBtn'
const VpsHero = () => {
    return (
        <>
            <section className='bg-gray-100 md:py-25 py-12'>
                <Container>
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 space-y-4 md:space-y-6 mt-5 md:mt-0">
                            <h2 className='text-2xl md:text-[45px] font-bold text-blue-950'>Get Blazing-fast Linux VPS Hosting To Match Your Needs</h2>
                            <p className='text-base text-blue-950'>Discover powerful and affordable Linux VPS hosting at Max Cloud Host. By launching a personal project or managing a large-scale business website, our flexible VPS plans are designed to meet every need.</p>
                            <HeroBtn
                                text={'See Plans and Pricing'}
                                to={'/'}
                                className={''}
                            />
                        </div>
                        <div className="md:w-2/5">
                            <div className="">
                                <img src={vpsImg} alt="VPS IMG" className='w-full' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='bg-gray-200 py-10 '>
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-gray-100 px-10 py-8 text-center rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 space-y-1">
                            <h4 className='text-blue-500 text-3xl font-bold'>6+</h4>
                            <p className='text-xl font-semibold text-blue-950'>Years of Experience</p>
                        </div>
                        <div className="bg-gray-100 px-10 py-8 text-center rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 space-y-1">
                            <h4 className='text-blue-500 text-3xl font-bold'>700+</h4>
                            <p className='text-xl font-semibold text-blue-950'>Happy Customers</p>
                        </div>
                        <div className="bg-gray-100 px-10 py-8 text-center rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 space-y-1">
                            <h4 className='text-blue-500 text-3xl font-bold'>1800+</h4>
                            <p className='text-xl font-semibold text-blue-950'>Website Hosted</p>
                        </div>
                        <div className="bg-gray-100 px-10 py-8 text-center rounded-md border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 space-y-1">
                            <h4 className='text-blue-500 text-3xl font-bold'>24/7</h4>
                            <p className='text-xl font-semibold text-blue-950'>Expert Support</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VpsHero