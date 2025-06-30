import React from 'react'
import Container from './Container'
import worldwide from '../assets/images/high-availability-worldwide.svg'
import price from '../assets/images/cost-effective-price.svg'
import perfomance from '../assets/images/design-for-speed-perfomance.svg'
import flexible from '../assets/images/fully-customizable-flexible.svg'
const VPSBenefits = () => {
  return (
    <>
        <section className='md:py-25 py-12 bg-blue-100'>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Most Popular Uses for Linux VPS Hosting</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <VPSBenefitsCard
                        image={worldwide}
                        title={'Global Availability with High Uptime'}
                        details={'Get the best performance of your website with Linux VPS Hosting Services. With Max Cloud Host you will experience the high-availability worldwide and an uninterrupted speed with 99.95% uptime assurance. The geographical placement of the data...'}
                        />
                        <VPSBenefitsCard
                        image={price}
                        title={'Low-Cost VPS, High-End Features'}
                        details={'We are cost-effective and always affordable Linux VPS hosting service providers, ensuring that you will get the best value for your money. Our VPS server plans provide reliable performance, high availability, and excellent support system which is included in the...'}
                        />
                        <VPSBenefitsCard
                        image={perfomance}
                        title={'Lightning-Fast Performance & Speed'}
                        details={'We design our server with the latest hardware, up to 1GBPS uplink, NVMe SSD storage as per client\'s website speed and performance, keeping in mind that your websites and applications run seamlessly and efficiently. All of our web hosting plans deliver...'}
                        />
                        <VPSBenefitsCard
                        image={flexible}
                        title={'Fully customizable & Flexible'}
                        details={'We have many amazing features and flexibility is one of them. All of our customers will get complete access to make your services customizable and flexible while using our Linux VPS Hosting Plans. From choosing your preferred operating system to Cpanel all the power is in your hands. This level of flexibility ensures that your hosting amends to your unique demands, optimizing performance...'}
                        />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default VPSBenefits


const VPSBenefitsCard = ({image,title,details}) => {
  return (
    <>
        <div className="bg-white p-8 rounded-md border border-gray-300 hover:shadow-lg hover:shadow-gray-300">
            <div className="flex justify-between items-center">
                <h4 className='text-blue-950 text-xl font-semibold'> {title} </h4>
                <div className="w-12">
                    <img src={image} alt="Item image" className='w-full' />
                </div>
            </div>
                <p className='text-base text-gray-500 mt-5'> {details} </p>

        </div>
    </>
  )
}