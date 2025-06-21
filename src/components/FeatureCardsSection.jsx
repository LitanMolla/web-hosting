import React from 'react'
import Container from './Container'
import support247 from '../assets/images/247.png'
import built from '../assets/images/built.png'
import features from '../assets/images/features.png'
const FeatureCardsSection = () => {
  return (
    <>
        <section className='bg-gray-100 pb-20'>
            <Container>
                <div className="space-y-8">
                    {/* Card Item */}
                    <div className="flex md:flex-row flex-col gap-8 items-stretch">
                        <div className="md:w-5/12 bg-blue-100 p-3 rounded-xl flex justify-center items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <img src={support247} alt="Card Photo" className='w-full' />
                        </div>
                        <div className="md:w-7/12 bg-blue-100 p-12 rounded-xl flex flex-col items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <h2 className='md:text-[32px] text-2xl text-blue-950 font-semibold'>Hassle-Free Hosting Solution for Startups to Enterprises</h2>
                        <p className='text-base text-gray-500 mt-6'>Choose reliable, high-speed cloud hosting solutions with top-notch security at an affordable price. Whether you're launching a startup or scaling an enterprise, our hosting ensures performance, security, and reliability—helping your website run smoothly without interruptions. Enjoy 24/7 expert support, 99.95% uptime, and a hassle-free hosting experience tailored for businesses of all sizes Host with confidence and grow your online presence effortlessly!</p>
                        </div>
                    </div>
                    {/* Card Item 2*/}
                    <div className="flex md:flex-row-reverse flex-col gap-8 items-stretch">
                        <div className="md:w-5/12 bg-blue-100 p-3 rounded-xl flex justify-center items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <img src={built} alt="Card Photo" className='w-full' />
                        </div>
                        <div className="md:w-7/12 bg-blue-100 p-12 rounded-xl flex flex-col items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <h2 className='md:text-[32px] text-2xl text-blue-950 font-semibold'>Built-in Security & Compliance - Your Website, Fully Protected</h2>
                        <p className='text-base text-gray-500 mt-6'>We ensure your website stays safe and secure with our advanced security and advanced features. Our robust strong protection against cyber threats, data breaches, and vulnerabilities, always keeping your business secure and running smoothly. Additionally we always make sure that our strong security framework ensures compliance with industry standards. Now you can enjoy peace of mind with industry-leading security measures built to protect your online presence.</p>
                        </div>
                    </div>
                    {/* Card Item 3*/}
                    <div className="flex md:flex-row flex-col gap-8 items-stretch">
                        <div className="md:w-5/12 bg-blue-100 p-3 rounded-xl flex justify-center items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <img src={features} alt="Card Photo" className='w-full' />
                        </div>
                        <div className="md:w-7/12 bg-blue-100 p-12 rounded-xl flex flex-col items-center duration-300 hover:shadow-xl hover:shadow-gray-300">
                        <h2 className='md:text-[32px] text-2xl text-blue-950 font-semibold'>Enhanced Features at a Budget-Friendly Price</h2>
                        <p className='text-base text-gray-500 mt-6'>With Max Cloud Hosting plans you will get the premium hosting features without breaking your pockets! Our reliable plans offer high-speed performance, scalability, and security, helping your business website succeed online. With us you will experience seamless growth with cost-effective cloud solutions. Our plans are designed for startups, entrepreneurs, and enterprises. Choose any of the plans which suit your needs.</p>
                        </div>
                    </div>
                    
                </div>
            </Container>
        </section>
    </>
  )
}

export default FeatureCardsSection