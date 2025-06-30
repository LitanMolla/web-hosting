import React from 'react'
import Container from './Container'
import PlansFeatureCard from './PlansFeatureCard'
import instant from '../assets/images/instant-activation.svg'
import dedicated from '../assets/images/dedicated-ip-address.svg'
import resource from '../assets/images/dedicated-resource.svg'
import root from '../assets/images/ssh-root-access.svg'
import ssd from '../assets/images/ssd-storage.svg'
import network from '../assets/images/1-gbps-network.svg'

const VPSPlansInclude = () => {
  return (
    <>
        <section className='md:py-25 py-12 bg-white'>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>All VPS Hosting Plans Includes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PlansFeatureCard
                        icon={instant}
                        title={'Instant Activation'}
                        details={'No waiting, no setup hassles, just go, because we are offering Instant activation with our plans! Our Linux VPS hosting activates the moment you sign up, allowing you to launch your website or application right away. Start instantly...'}
                        />
                        <PlansFeatureCard
                        icon={dedicated}
                        title={'Dedicated IP Address'}
                        details={'All of our Linux VPS plans include a dedicated IP to enhance the online reputation of your website, support custom configurations, and improve SEO and email deliverability. This is ideal for businesses needing privacy, control, and...'}
                        />
                        <PlansFeatureCard
                        icon={resource}
                        title={'100% Dedicated Resource'}
                        details={'Let’s enjoy consistent performance with fully dedicated resources with our linux vps plan—no sharing, no slowdowns, nothing only 100% performance. All of our plans are perfect for running demanding websites or applications 24/7, giving your business reliability, speed, and smooth operati...'}
                        />
                        <PlansFeatureCard
                        icon={root}
                        title={'Full Root SSH Access'}
                        details={'Now you can easily gain complete control with full root SSH access with all of our hosting plans. Install applications, configure software, manage files, and run commands securely—giving developers and businesses total flexibility to tailor servers to exact needs...'}
                        />
                        <PlansFeatureCard
                        icon={ssd}
                        title={'NVMe SSD Storage'}
                        details={'Let’s boost your website\'s overall speed with the NVMe SSD storage feature. Now you can enjoy faster data access, low latency, and improved load times. With Linux VPS this feature is perfect for high-performance applications and a smooth, seamless browsing experience...'}
                        />
                        <PlansFeatureCard
                        icon={network}
                        title={'Upto 1Gbps Network'}
                        details={'Experience the super blazing-fast network speeds up to 1Gbps and more. With us you can enjoy rapid data transfers, low latency, and reliable connectivity for smoother website performance, faster uploads, and an exceptional user experience every time. Check out our plans today!...'}
                        />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default VPSPlansInclude