import React from 'react'
import Container from './Container'

const Frequently = () => {
  return (
    <>
        <section className='py-20 bg-gray-100'>
            <Container>
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8'>Find the Right Hosting Services for Your Needs</h2>
                <div className="space-y-4">
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>what is cloud hosting?</h4>
                        <p className='text-base text-gray-500'>Cloud hosting is a type of web hosting that uses multiple interconnected servers to distribute resources, with high availability, scalability, and flexibility. Additionally, cloud hosting services allow websites and applications to access on-demand resources, reducing downtime and superchargers performance.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>what is the difference between vps and cloud hosting?</h4>
                        <p className='text-base text-gray-500'>VPS (Virtual Private Server) hosting provides dedicated virtualized resources within a single physical server, whereas cloud hosting distributes resources across multiple servers. Cloud hosting is more flexible, and reliable than VPS, offering better uptime and handling sudden traffic surges easily.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>is cloud hosting secure?</h4>
                        <p className='text-base text-gray-500'>Yes, cloud hosting is completely secured when managed properly. It offers advanced security features such as data encryption, automated backups and firewalls. Many cloud hosting providers also implement multi-layer security protocols and regular updates to protect against cyber threats.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>What are the benefits of cloud hosting?</h4>
                        <p className='text-base text-gray-500'>Cloud hosting provides numerous benefits, including scalability, cost efficiency, high availability, and faster performance. It ensures websites remain online even during traffic spikes, reduces hardware dependency, and allows businesses to pay only for the resources they use, making it an ideal solution for growing websites and applications.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>Will I get free SSL along with the hosting plan?</h4>
                        <p className='text-base text-gray-500'>Yes, all of our hosting plans from Max Cloud Host include a free SSL certificate for secure website encryption.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>Is It Possible to Transfer My Current Website to Max Cloud Host?</h4>
                        <p className='text-base text-gray-500'>Yes, Max Cloud Host offers free website migration assistance to ensure a seamless transfer with minimal downtime.</p>
                    </div>
                    {/* item */}
                    <div className="p-6 border border-gray-300 duration-300 hover:shadow-lg hover:shadow-gray-300 hover:scale-105 border-l-4 border-l-blue-500">
                        <h4 className='text-2xl font-semibold text-blue-950'>Is max cloud host good for my business website?</h4>
                        <p className='text-base text-gray-500'>Absolutely! Max Cloud Host provides fast, secure, and scalable hosting solutions tailored for business growth. We will provide you with the best and affordable solutions at best rates.</p>
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Frequently