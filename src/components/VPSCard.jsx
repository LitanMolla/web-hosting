import { Link } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";

const VPSCard = ({ name, price, core, storage, bandwidth, ram, to, ip }) => {
    return (
        <>
            <div className="max-w-full rounded-xl border border-gray-300 hover:shadow-lg hover:shadow-gray-300 py-6 px-6 duration-300 bg-white space-y-3 relative">
                {/* <div className="absolute top-0 right-0">
                    <div class="relative inline-block">
                        <span class="inline-flex items-center bg-blue-500 text-white text-lg font-medium py-2 pr-4 pl-8 [clip-path:polygon(0%_50%,20%_0%,100%_0%,100%_100%,20%_100%)] ">
                            <span class="mr-2 text-xs">&bull;</span> 50% OFF
                        </span>
                    </div>

                </div> */}
                <h4 className='text-2xl font-semibold text-blue-950'> {name} </h4>
                <p className='text-gray-500 text-base'>High Quality and efficient Virtual Private Server</p>
                <h3 className='text-3xl font-semibold text-blue-950'> {price} </h3>
                <Link to={to} className='text-white bg-blue-500 block py-3 duration-300 text-center rounded-md hover:bg-blue-950'>Buy Now</Link>
                <div className="space-y-2">
                    <h4 className='text-base text-gray-500 font-semibold'>Features</h4>
                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{core}</b> CPU Processor</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{ram}</b> Guaranteed RAM</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{storage}</b> SSD Storage</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{bandwidth}</b> Premium Bandwidth</p>
                    </div>

                    <div className="border-b border-b-gray-300"></div>

                    <div className="text-base flex items-center gap-2">
                        <FaCheckCircle className='text-blue-500 ' />
                        <p className='text-blue-950'><b>{ip}</b> Dedicated IP Address</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default VPSCard