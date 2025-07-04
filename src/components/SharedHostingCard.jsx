import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";

const SharedHostingCard = ({ name, price, space, bandwidth, addon, subdomain, database, email, backups, cpu, ram, entryprocess, io, controlpanel, to }) => {
    return (
        <>
            <div className="max-w-full rounded-xl border border-gray-300 hover:shadow-lg hover:shadow-gray-300 py-6 px-6 duration-300 bg-white space-y-3 relative">
                <div className="absolute top-0 right-0">
                    <div class="relative inline-block">
                        <span class="inline-flex items-center bg-blue-500 text-white text-lg font-medium py-2 pr-4 pl-8 [clip-path:polygon(0%_50%,20%_0%,100%_0%,100%_100%,20%_100%)] ">
                            <span class="mr-2 text-xs">&bull;</span> 50% OFF
                        </span>
                    </div>

                </div>
                <h4 className='text-2xl font-semibold text-blue-950'> {name} </h4>
                <p className='text-gray-500 text-xs'>Enjoy Optimal Website Performance</p>
                <h3 className='text-3xl font-semibold text-blue-950'> {price} </h3>
                <Link to={to} className='text-white bg-blue-500 block py-3 duration-300 text-center rounded-md hover:bg-blue-950'>Buy Now</Link>
                <div className="space-y-1">
                    <h4 className='text-base text-gray-500 font-semibold'>Features</h4>
                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{space}</b> GB NVMe Space</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{bandwidth}</b> GB Bandwidth</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{addon}</b> Addon Domain</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{subdomain}</b> Sub Domain</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{database}</b> Database</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{email}</b> Email</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{backups}</b> Data Backups</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>Terminal/SSH</b> Access</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{cpu}</b> Core CPU</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{ram} GB</b> DDR4 RAM</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{entryprocess}</b> Entry Process</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{io}</b> MB I/O</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>Litespeed</b> Cache</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{controlpanel}</b> Control Panel</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SharedHostingCard