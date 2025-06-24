import React from 'react'
import Container from './Container'
import lightning from '../assets/images/lightning-fast-performance.svg'
import cpanel from '../assets/images/control-panel.svg'
import uptime from '../assets/images/uptime-guarantee.svg'
import support from '../assets/images/real-human-support.svg'
const PremiumFeatures = () => {
    return (
        <>
            <section className='bg-gray-100 py-12 md:py-20'>
                <Container>
                    <div className="">
                        <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Power Up Your Website with Premium Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <PremiumFeaturesCard
                                image={lightning}
                                title={'Lightning-Fast Performance'}
                                details={'Experience the fast performance with our hosting solutions powered by NVMe SSD, Litespeed Web Server, with advanced technology and optimized servers. It is perfect for boosting the user experience and SEO rankings. Our Cheap shared web hosting offers the premium features for businesses and individuals.'}
                            />
                            <PremiumFeaturesCard
                                image={cpanel}
                                title={'Easy to use Control Panel'}
                                details={'Manage your website through easy to use control panels as it is designed for both beginners as well as experts, it helps in managing the files, emails, domains and databases with an interactive interface and powerful features through which you will have full control.'}
                            />
                            <PremiumFeaturesCard
                                image={uptime}
                                title={'99.95% Uptime Guarantee'}
                                details={'Keep your website online and reliable with our 99.95% uptime Guarantee on all shared hosting plans, Our infrastructure and the cutting-edge monitoring will ensure the minimal downtime, hence keeping your site consistently accessible to visitors. Trust us as we will deliver stability with our commitment.'}
                            />
                            <PremiumFeaturesCard
                                image={support}
                                title={'24x7x365 Real Human Support'}
                                details={'Our Dedicated team is always available to assist you 24*7*365, day or night, including holidays through call, messages or email. Whether it is resolving issues, providing advice or addressing the inquiries, we will prioritize your satisfaction with personalized solutions.'}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PremiumFeatures

const PremiumFeaturesCard = ({ image, title, details }) => {
    return (
        <>
            <div className="bg-white p-8 rounded-md border border-gray-300 border-t-4 border-t-blue-500 duration-300 hover:shadow-xl hover:shadow-gray-300 hover:scale-105 space-y-3 max-w-full">
                <div className="flex gap-3 items-center">
                    <div className="w-15 h-15">
                        <img src={image} alt="Item image" className='w-full' />
                    </div>
                    <h4 className='text-lg font-semibold text-blue-950'> {title} </h4>
                </div>
                <p className='text-base text-gray-500'> {details} </p>
            </div>
        </>
    )
}