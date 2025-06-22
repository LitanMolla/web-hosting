import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaPhoneAlt,FaLinkedin ,FaFacebook ,FaYoutube ,FaTwitter ,FaInstagram  } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";


const Footer = () => {
    return (
        <>
            <section className='bg-blue-950 py-12'>
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Footer menu Item */}
                        <div className="text-white space-y-2">
                            <h4 className='text-base font-bold uppercase my-2'>Hosting</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Shared Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>FFmpeg Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Joomla Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>WordPress Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Reseller Hosting</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Domain</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Buy Domain Name</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Transfer to us</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Security</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>SSL Certificate</Link>
                        </div>
                        {/* Footer menu Item */}
                        <div className="text-white space-y-2">
                            <h4 className='text-base font-bold uppercase my-2'>Cloud Server</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Managed AWS Cloud</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Managed DigitalOcean Cloud</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Managed Vultr Cloud</Link>

                            <h4 className='text-base font-bold uppercase my-2'>VPS & Server</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Linux VPS Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Windows VPS Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Forex VPS Hosting</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Linux Dedicated Server</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Windows Dedicated Server</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Server Management</Link>
                        </div>
                        {/* Footer menu Item */}
                        <div className="text-white space-y-2">
                            <h4 className='text-base font-bold uppercase my-2'>Email</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Google Workspace</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Microsoft 365</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Helpdesk</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Blog</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Knowledge Base</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Support Ticket</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Legal</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Privacy Policy</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Terms & Conditions</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Refund Policy</Link>
                        </div>
                        {/* Footer menu Item */}
                        <div className="text-white space-y-2">
                            <h4 className='text-base font-bold uppercase my-2'>Company</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>About us</Link>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Contact us</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Affiliate Program</h4>
                            <Link className='text-base duration-300 hover:text-blue-500 text-gray-400 block'>Make Money</Link>

                            <h4 className='text-base font-bold uppercase my-2'>Contact us</h4>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-white/40 flex justify-center items-center rounded-md flex-shrink-0">
                                        <FaPhoneAlt />
                                    </div>
                                    <Link className='duration-300 hover:text-blue-500'>+8801700000000</Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-8 w-8 bg-white/40 flex justify-center items-center rounded-md flex-shrink-0">
                                        <IoIosMailOpen />
                                    </div>
                                    <Link className='duration-300 hover:text-blue-500'>support@bangladesh.com</Link>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link to={'/'} className='h-8 w-8 bg-white/40 flex justify-center items-center rounded-md duration-300 hover:bg-white hover:text-blue-500'><FaLinkedin/></Link>
                                <Link to={'/'} className='h-8 w-8 bg-white/40 flex justify-center items-center rounded-md duration-300 hover:bg-white hover:text-blue-500'><FaFacebook /></Link>
                                <Link to={'/'} className='h-8 w-8 bg-white/40 flex justify-center items-center rounded-md duration-300 hover:bg-white hover:text-blue-500'><FaInstagram /></Link>
                                <Link to={'/'} className='h-8 w-8 bg-white/40 flex justify-center items-center rounded-md duration-300 hover:bg-white hover:text-blue-500'><FaTwitter /></Link>
                                <Link to={'/'} className='h-8 w-8 bg-white/40 flex justify-center items-center rounded-md duration-300 hover:bg-white hover:text-blue-500'><FaYoutube /></Link>
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
            <footer className='bg-blue-100 py-3'>
                <Container>
                    <div>
                    <p className='text-gray-500 text-base'>Copyright © 2025 <Link className='text-blue-500'>Dhaka Cloud</Link> All Rights Reserved. </p>
                </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer