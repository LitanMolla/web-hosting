import React from 'react'
import Container from './Container'
import { FaCheck,FaTimes  } from "react-icons/fa";
import HeroBtn from './HeroBtn';

const VPSCompare = () => {
    return (
        <>
            <section className='md:py-25 py-12 bg-white'>
                <Container>
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Compare Self and Fully Managed VPS Plans</h2>
                    <div className="">
                        {/* <table className='w-full border border-gray-300 border-collapse text-left'>
                            <thead>
                                <tr className='border border-gray-300'>
                                    <th className='text-xl font-bold text-blue-950 border border-gray-300 p-2.5'>SERVER & APPLICATION SETUP</th>
                                    <th className='text-xl font-bold text-blue-950 border border-gray-300 p-2.5 text-center'>SELF MANAGED VPS</th>
                                    <th className='text-xl font-bold text-blue-950 border border-gray-300 p-2.5 text-center'>FULLY MANAGED VPS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>Basic Server Setup</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>Control Panel Installation</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaTimes className='mx-auto text-red-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>Free Website Migration</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaTimes className='mx-auto text-red-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>Website & database restoration from the backup</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaTimes className='mx-auto text-red-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>3rd Party Application Installations</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaTimes className='mx-auto text-red-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                                <tr>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'>Monitors the core services like HTTP(S), MySQL, FTP, POP, IMAP, SSH, DNS	</td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaTimes className='mx-auto text-red-500' /> </td>
                                    <td className='text-base text-gray-500 p-2.5 border border-gray-300'> <FaCheck className='mx-auto text-green-500' /> </td>
                                </tr>
                            </tbody>
                        </table> */}
                    </div>
                    <div className="flex justify-center mt-12">
                        <HeroBtn text={'Get Fully Managed VPS Hosting Plans'} to={'/'} className={'mx-auto'} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default VPSCompare