import React from 'react'
import Container from './Container'
import PlansFeatureCard from './PlansFeatureCard'
import domain from '../assets/images/domain.svg'
import ssl from '../assets/images/ssl-certificate.svg'
import backup from '../assets/images/website-backup.svg'
import nvme from '../assets/images/nvme-ssd-storage.svg'
import security from '../assets/images/malware-security.svg'
import email from '../assets/images/email.svg'

const PlansIncludes = () => {
  return (
    <>
        <section className='py-12 md:py-20 bg-blue-100'>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>All Shared Hosting Plans Includes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PlansFeatureCard
                        icon={domain}
                        title={'Free Domain Name'}
                        details={'Get the free domain name with our ESSENTIALS, PROFESSIONAL or ENTERPRISE shared web hosting plans which is perfect for personal, business or the corporate needs as these plans will give the Cheap shared hosting solutions to start your'}
                        />
                        <PlansFeatureCard
                        icon={ssl}
                        title={'Free SSL Certificate'}
                        details={'Dhaka Cloud Host goes above and beyond to protect your website. With our top-tier shared hosting plans, you\'ll receive a free SSL certificate, guaranteeing secure, encrypted connections and peace of mind. Ensuring your website\'s safety is our top priority.'}
                        />
                        <PlansFeatureCard
                        icon={backup}
                        title={'Regular Website Backup'}
                        details={'Your website\'s data is precious. Our automatic website backups ensure its security, offering peace of mind and uninterrupted online presence. Your data remains safe, accessible, and always protected, safeguarding your digital'}
                        />
                        <PlansFeatureCard
                        icon={nvme}
                        title={'High Speed NVMe SSD Disk'}
                        details={'Experience lightning-fast load times with NVMe SSD storage included in all our plans. Your website will perform at its best, impressing visitors with its speed, reliability, and seamless user experience. Make a lasting impact with swift and'}
                        />
                        <PlansFeatureCard
                        icon={security}
                        title={'Virus & Malware Protection'}
                        details={'We prioritize your website\'s safety. Our hosting includes robust built-in virus and malware security, keeping your website and valuable data protected from online threats and attacks. Trust us to shield your digital assets.'}
                        />
                        <PlansFeatureCard
                        icon={email}
                        title={'Professional Email Account'}
                        details={'Build trust and professionalism with our included professional email accounts. They offer you a credible means of communication, ensuring your business presents itself effectively in the online sphere.'}
                        />
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default PlansIncludes