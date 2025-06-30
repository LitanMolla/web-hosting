import React from 'react'
import Container from './Container'
import performance from '../assets/images/performance.jpg'
import HeroBtn from './HeroBtn'
const ExperienceVPS = () => {
  return (
    <>
        <section className='md:py-25 py-12 bg-blue-100'>
            <Container>
                <div className="flex justify-between items-center gap-10 flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="rounded-2xl overflow-hidden rounded-tl-4xl">
                            <img src={performance} alt="performance" className='w-full' />
                        </div>
                    </div>
                    <div className="md:w-1/2 space-y-5">
                        <h3 className='font-bold text-3xl md:text-[40px] text-blue-950'>Experience Unmatched Performance and Security</h3>
                        <p className='text-base text-gray-500'>Our latest technology ensures your websites and applications run at top speed, no matter the demand. With Max Cloud Host, Experience seamless performance, faster load times, and a smoother user experience—so your business can thrive without technical limitations holding you back.</p>
                        <p className='text-base text-gray-500'>With enterprise-grade security measures in place, your data stays safe from threats at 24X7 with us. We do encrypted backups to real-time monitoring, we provide a complete peace of mind so you can focus on growth while we take care of your digital security.</p>
                        <HeroBtn text={'Get Started'}/>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default ExperienceVPS