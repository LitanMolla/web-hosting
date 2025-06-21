import React from 'react'
import Container from './Container'
import HostingSolutionCard from './HostingSolutionCard'
import aws from '../assets/images/aws.svg'
import digital from '../assets/images/digital.svg'
import vultr from '../assets/images/vultr.svg'

const HostingSolution = () => {
    return (
        <>
            <section className='bg-gray-100 py-25'>
                <Container>
                    <div className="">
                        <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-10'>Fast, Secure & Reliable Cloud Hosting Solution</h2>
                        <div className="flex lg:flex-row flex-col items-center gap-8">
                            <HostingSolutionCard
                                image={aws}
                                title={'AWS Cloud'}
                                description={'Take your business to the next level with AWS Cloud Hosting, offering unmatched scalability, security, and performance. At Max Cloud Host, we provide fully managed AWS cloud solutions.'}
                                to={'/'}
                            />
                            <HostingSolutionCard
                                image={digital}
                                title={'DigitalOcean Cloud'}
                                description={'At Max Cloud Host, we offer managed DigitalOcean Cloud Servers which is the best and user-friendly interface, making it the preferred choice for developers, entrepreneurs and startups.'}
                                to={'/'}
                            />
                            <HostingSolutionCard
                                image={vultr}
                                title={'Vultr Cloud'}
                                description={'Max Cloud Host offers managed Vultr Cloud Server which is the go-to choice for businesses who are seeking fast cloud servers at very competitive pricing. With data centers worldwide.'}
                                to={'/'}
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default HostingSolution