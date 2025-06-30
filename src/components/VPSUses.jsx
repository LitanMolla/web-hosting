import React from 'react'
import Container from './Container'
import ecommerce from '../assets/images/ecommerce-platform.svg'
import forex from '../assets/images/forex-trading-advantage.svg'
import tailored from '../assets/images/tailored-hosting-solutions.svg'
import development from '../assets/images/development-and-testing-environments.svg'
import email from '../assets/images/email-server.svg'
import database from '../assets/images/database-server.svg'
const VPSUses = () => {
    return (
        <>
            <section className='md:py-25 py-12 bg-white'>
                <Container>
                    <div className="">
                        <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Most Popular Uses for Linux VPS Hosting</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                            <UsesCrad
                            image={ecommerce}
                            title={'Host E-commerce Website'}
                            details={'Linux VPS hosting offers the power and flexibility to run secure, high-performance online stores. It ensures faster load times, stable uptime, and full control, making it...'}
                            />
                            <UsesCrad
                            image={forex}
                            title={'Forex Trading Advantage'}
                            details={'A Linux VPS provides low-latency connections and 24/7 uptime, making it perfect for Forex traders who need consistent, real-time market access. Run...'}
                            />
                            <UsesCrad
                            image={tailored}
                            title={'Tailored Hosting Solutions'}
                            details={'Customize your hosting environment with a Linux VPS to meet specific business or application needs. Whether it’s software configuration or traffic handling, you’ll'}
                            />
                            <UsesCrad
                            image={development}
                            title={'Development and Testing'}
                            details={'Developers can use Linux VPS environments to test applications, websites, or scripts safely and efficiently. It allows for isolated, flexible testing...'}
                            />
                            <UsesCrad
                            image={email}
                            title={'Dedicated Email Server'}
                            details={'Ensure privacy and control by running your own email server on a Linux VPS. Avoid shared server restrictions and manage your emails, spam filters, and storage with advanced customization and better...'}
                            />
                            <UsesCrad
                            image={database}
                            title={'Setup Database Server'}
                            details={'Host and manage your own database server on a Linux VPS. Benefit from faster performance, improved security, and full control over configurations for MySQL,...'}
                            />
                            
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VPSUses

const UsesCrad = ({image,title,details}) => {
    return (
        <div className="max-w-full px-5 py-8 bg-white outline-1 outline-gray-300 text-center hover:shadow-lg hover:shadow-gray-300 duration-300">
            <div className="w-20 mx-auto">
                <img src={image} alt="Popular Uses image" className='w-full' />
            </div>
            <h4 className='text-xl font-bold text-blue-950 mb-2 mt-3'> {title} </h4>
            <p className='text-gray-500 text-base'> {details} </p>
        </div>
    )
}