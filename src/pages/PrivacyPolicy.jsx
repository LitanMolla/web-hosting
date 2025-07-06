import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
    return (
        <>
            <section className='py-27 bg-blue-500'>
                <Container>
                    <h3 className='text-white font-bold text-[44px] text-center'>Privacy Policy</h3>
                </Container>
            </section>
            <section className='text-blue-950'>
                <Container>
                    <div className="flex py-12 gap-8 flex-col md:flex-row">
                        {/* left */}
                        <div className="md:w-70 md:sticky md:top-22 md:self-start">
                            <Link className='font-medium text-gray-600 duration-300 hover:text-blue-500'>Privacy Policy</Link>
                            <hr className='text-gray-300 my-2' />
                            <Link className='font-medium text-gray-600 duration-300 hover:text-blue-500'>Refund Policy</Link>
                            <hr className='text-gray-300 my-2' />
                            <Link className='font-medium text-gray-600 duration-300 hover:text-blue-500'>Acceptable Use Policy</Link>
                            <hr className='text-gray-300 my-2' />
                            <Link className='font-medium text-gray-600 duration-300 hover:text-blue-500'>Terms & Conditions</Link>
                            <hr className='text-gray-300 my-2' />
                            <Link className='font-medium text-gray-600 duration-300 hover:text-blue-500'>Service-Level Agreement</Link>
                        </div>
                        {/* right */}
                        <div className="flex-1">
                            {/* Item */}
                            <div className="space-y-2">
                                <h3 className='font-bold text-[30px] text-blue-950'>About Policy</h3>
                                <p className='text-base text-blue-950'>The company cares about your private information and your privacy as well. We intend to provide our users with a healthy and trusted environment. For this reason, we need to collect certain information, just to make sure that your engagement and usage with our website remains safe and you can enjoy the perks and benefits well. We at maxcloudhost uses your data only if it is needed, as in the case of any product delivery, mobile applications, services or website.</p>
                                <hr className='text-gray-300 my-4' />
                            </div>
                            {/* Item */}
                            <div className="space-y-2">
                                <h3 className='font-bold text-[30px] text-blue-950'>Covered Entities</h3>
                                <p>Website:</p>
                                <p>Blog:</p>
                                <p>Tutorials:</p>
                                <p>Client-Area (New Portal):</p>
                                <p>Client-Area (Old Portal): </p>
                                <hr className='text-gray-300 my-4' />
                            </div>
                            {/* Item */}
                            <div className="space-y-2">
                                <h3 className='font-bold text-[30px] text-blue-950'>Information We Collect From You</h3>
                                <h4 className='text-2xl font-bold text-blue-950'>When You Visit on Our Website:</h4>
                                <ul className='list-disc ml-5'>
                                    <li>Country Name</li>
                                    <li>City</li>
                                    <li>IP Address</li>
                                    <li>Date & Time</li>
                                    <li>Browser Type</li>
                                    <li>Referring Site</li>
                                    <li>Pages Your View</li>
                                </ul>
                                <hr className='text-gray-300 my-4' />
                                <h4 className='text-2xl font-bold text-blue-950'>When Start Live Chat</h4>
                                <ul className='list-disc ml-5'>
                                    <li>Name</li>
                                    <li>Email Address</li>
                                    <li>Call / WhatsApp Contact No.</li>
                                    <li>Text Message</li>
                                    <li>Country Name</li>
                                    <li>City</li>
                                    <li>IP Address</li>
                                    <li>Date & Time</li>
                                    <li>Browser Type</li>
                                    <li>Referring Site</li>
                                    <li>Pages Your View</li>
                                </ul>
                                <hr className='text-gray-300 my-4' />
                                <h4 className='text-2xl font-bold text-blue-950'>When You Purchase Any Services or Sign up</h4>
                                <ul className='list-disc ml-5'>
                                    <li>Name</li>
                                    <li>Email id</li>
                                    <li>Mobile No</li>
                                    <li>Company Name</li>
                                    <li>Full Address</li>
                                    <li>GST No (For Indian customer only)</li>
                                    <li>Currency (INR, USD, EURO, GBP)</li>
                                    <li>Password Of Your Account</li>
                                    <li>Marketing Email (On/Off)</li>
                                    <li>IP Address</li>
                                    <li>Date & Time</li>
                                    <li>Browser Type</li>
                                </ul>
                                <hr className='text-gray-300 my-4' />
                                <h4 className='text-2xl font-bold text-blue-950'>When You Register or Transfer Domain</h4>
                                <p className='text-base text-blue-950'>When you purchase Domain or transfer your domain from your old provider to us for top level domains (TLDs), as the domain registrar, we are required to collect the following personal information from you (collectively, "Personal Information"):</p>
                                <ul className='list-disc ml-5'>
                                    <li>Registrant Name</li>
                                    <li>Registrant Organization (where applicable)</li>
                                    <li>Registrant Address</li>
                                    <li>Registrant Email</li>
                                    <li>Registrant Fax (where applicable)</li>
                                    <li>Registrant Phone number</li>

                                    <li>Administrative Contact</li>
                                    <li>Administrative Contact Organization (where applicable)</li>
                                    <li>Administrative Contact Address</li>
                                    <li>Administrative Contact Email</li>
                                    <li>Administrative Contact Fax (where applicable)</li>
                                    <li>Administrative Contact Telephone Number</li>

                                    <li>Technical Contact</li>
                                    <li>Technical Contact Organization (where applicable)</li>
                                    <li>Technical Contact Address</li>
                                    <li>Technical Contact Email</li>
                                    <li>Technical Contact Fax (where applicable)</li>
                                    <li>Technical Contact Telephone Number</li>

                                    <li>Billing Contact</li>
                                    <li>Billing Contact Organization (where applicable)</li>
                                    <li>Billing Contact Address</li>
                                    <li>Billing Contact Email</li>
                                    <li>Billing Contact Fax (where applicable)</li>
                                    <li>Billing Contact Telephone Number</li>
                                </ul>
                                <p className='text-base text-blue-950'>Our collection of Personal Information is necessary to comply with contractual obligations we have with the Internet Corporation for Assigned Names and Numbers ("ICANN") and with certain TLD registries ("Registries") so that you can validly register your domain name. In addition to Personal Information, our contracts with some Registries may require us to collect other personal information for the registration of a TLD, such as certain professional affiliations, identification, or other qualifiers ("Additional Personal Information").</p>
                                <hr className='text-gray-300 my-4' />
                                <h4 className='text-2xl font-bold text-blue-950'>How We Used Your Information</h4>
                                <ul className='list-disc ml-5'>
                                    <li>To provide the requested Services to you;</li>
                                    <li>To provide you with useful content;</li>
                                    <li>To ensure the proper functioning of our Services;</li>
                                    <li>To offer and improve our Services;</li>
                                    <li>To provide you with requested information or technical support;</li>
                                    <li>To facilitate your movement through our websites or your use of our Services;</li>
                                    <li>To do a better job of advertising and marketing our Services (our use of your information to do this is performed with your consent where required by applicable law);</li>
                                    <li>To advertise and market third party products and services (such advertisement is only performed with your permission where your consent is required by applicable law);</li>
                                    <li>To diagnose problems with our servers or our Services;</li>
                                    <li>In connection with our security and compliance programs;</li>
                                    <li>To administer our websites;</li>
                                    <li>To communicate with you;</li>
                                    <li>To target prospective customers with our products or services (such targeting is only performed with your permission where your consent is required by applicable law);</li>
                                    <li>To assist us in offering you a personalized experience or otherwise tailor our Services to you;</li>
                                    <li>As otherwise described in this privacy policy.</li>
                                </ul>
                                <hr className='text-gray-300 my-4' />
                                <h4 className='text-2xl font-bold text-blue-950'>How We Shared Your Information</h4>
                                <p className='text-base text-blue-900'> Cloud Dhaka may share personal data with third parties in order to provide a better service.</p>
                                <ul className='list-disc ml-5'>
                                    <li>Third Party Providers:</li>
                                    <li>Payment Gateway Providers:</li>
                                    <li>Reseller Services Provider:</li>
                                </ul>
                                <hr className='text-gray-300 my-4' />
                            </div>
                            <PolicyCardItem
                                heading={'Cookie Policy And Other Tracking Technologies'}
                                details={' Cloud Dhaka uses technologies like cookies, pixels, and local storage to ensure you have a very efficient experience on our website and to provide you with services that are easy to use. Cookies are pieces of data in the form of small text files that are stored on your devices when websites are loaded on a browser. Cookies help us identify your browser and device.'}
                            />
                            <PolicyCardItem
                                heading={'Newsletter'}
                                details={'Max Cloud Host provides you with the feature to "opt in" and "opt out" of our newsletter at any time. Our important information, occasional news, and special offers are sent every month, every week, or every day, so it will certainly contain a lot of useful information and any offers we may have. If you no longer want to receive our important information, newsletters, and promotional communications, you can unsubscribe at any time.'}
                            />
                            <PolicyCardItem
                                heading={'Legal Disclaimer'}
                                details={'Since we are here to support you and grow your business to great heights. Any malpractices will not be tolerated on our website, given our great service and amazing users connected by us. We look forward to adding value to your lives by providing the best services. And we will protect our users and website security. Our safety and guidelines are legally bonded, and malpractice must be avoided at any cost.'}
                            />
                            <PolicyCardItem
                                heading={'Security'}
                                details={'We keep our users\' information safe and guarded by many encrypted methods. We provide 100% safety to our users, and hence users need not worry about their privacy and personal information. Users\' data is well preserved for any emergency, such as if you are unable to log in. We run a test to see if it is you and then give you access after performing the investigation.'}
                            />
                            {/* How to Contact Max Cloud Host */}
                            <PolicyCardItem
                                heading={'Changes to This Privacy Statement'}
                                details={'We change our privacy policy from time to time. This is done to provide you with great service and a smooth experience. It is advised to check the privacy policy; you can do so just by visiting the website. We will notify you via email as well.'}
                            />

                            <p className='text-base'>Last updated on: <b>15-August-2023</b></p>
                            <p className='text-lg mt-5 bg-blue-100 p-5 border-l-4 border-l-blue-500'>By using our service, you agree to Max Cloud Host's Privacy Policy, Terms and Conditions, Refund Policy, SLA, and Acceptable Use Policy.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default PrivacyPolicy

const PolicyCardItem = ({ heading, details }) => {
    return (
        <div className="space-y-2">
            <h3 className='font-bold text-[30px] text-blue-950'> {heading} </h3>
            <p className='text-base text-blue-950'> {details} </p>
            <hr className='text-gray-300 my-4' />
        </div>
    )
}