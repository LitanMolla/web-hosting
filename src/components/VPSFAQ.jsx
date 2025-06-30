import React from 'react'
import FAQ from './FAQ'
import Container from './Container'

const VPSFAQ = () => {
    return (
        <>
            <section className='md:py-25 py-12 bg-blue-100'>
                <Container>
                    <div className="">
                        <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Linux VPS Hosting - FAQ's</h2>
                        <div className="space-y-4">

                            <FAQ
                                title={'What is virtual private server?'}
                                details={"A Virtual Private Server (VPS) is a type of hosting that allows you to have your own dedicated server resources, such as CPU, RAM, and storage, while still sharing the same physical server with other customers. This allows you to have more control and flexibility over your hosting environment, as you have the ability to install your own software and customize your server settings. VPS hosting is often a good option for websites that are experiencing high levels of traffic or require more resources than a shared hosting plan can provide."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'What is Linux VPS hosting?'}
                                details={"Linux VPS Hosting is a type of web hosting service that uses Linux as the operating system for the virtual private server (VPS). A VPS is a virtual machine that runs on a physical server and shares its resources with other VPSs. Linux VPS Hosting allows you to have full root access and customize your server according to your needs."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'Where are the servers located?'}
                                details={"All of our servers are located in India, Germany, and France. Contact our team—we can provide additional server locations on demand."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'What control panels do you provide?'}
                                details={"We offer cPanel, Plesk, DirectAdmin, and more control panels based on your preference. Let us know your requirements during setup, and we’ll handle the rest."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'Are Backups Included in Linux VPS Hosting plans?'}
                                details={"No, Backups are not included by default. You can easily add a backup option during the ordering process to ensure your data stays secure and recoverable all the time."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'Can I install any software on my Linux VPS hosting server?'}
                                details={"Yes! With full root access, you have complete freedom to install any compatible software or tools required for your website or business operations."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'What’s the difference between VPS hosting and dedicated servers?'}
                                details={"VPS hosting shares server resources with others but remains isolated. Dedicated servers offer all resources exclusively to you, ideal for high-traffic websites and custom setups."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'What is the difference between a Linux VPS hosting and Windows VPS hosting?'}
                                details={"The main difference between is , The Linux VPS runs on open-source OS and supports PHP/MySQL and, the Windows VPS uses Microsoft OS, great for ASP.NET or Windows-based applications needing a GUI and specific frameworks."}
                                className={'bg-white'}
                            />
                            <FAQ
                                title={'What is the difference between managed VPS hosting and unmanaged VPS hosting?'}
                                details={"In Managed VPS hosting it includes full support, updates, and monitoring by our team and, in Unmanaged VPS gives you complete root access and control, This vps hosting is ideal for experienced users needing flexibility."}
                                className={'bg-white'}
                            />

                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VPSFAQ