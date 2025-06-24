import React from 'react'
import Container from './Container'
import heroHosting from '../assets/images/best-shared-web-hosting.svg'
import HeroBtn from './HeroBtn'
const SharedHero = () => {
    return (
        <>
            <section className='bg-gray-100 md:py-25 py-12'>
                <Container>
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        <div className="md:w-3/5 space-y-4 md:space-y-6 mt-5 md:mt-0 ">
                            <h2 className='text-2xl md:text-[45px] font-bold text-blue-950'>Fast, Secure & Reliable Shared Hosting with cPanel</h2>
                            <p className='text-base text-blue-950'>Buy powerful shared web hosting services and enjoy many benefits like high-speed, affordable, top-notch security, and reliable hosting services in India with 24x7 expert support and 99.95% uptime guarantee!</p>
                            <HeroBtn
                                text={'See Plans and Pricing'}
                                to={'/'}
                                className={''}
                            />
                        </div>
                        <div className="md:w-2/5">
                            <div className="">
                                <img src={heroHosting} alt="VPS IMG" className='w-full' />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default SharedHero