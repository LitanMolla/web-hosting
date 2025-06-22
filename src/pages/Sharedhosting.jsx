import React, { useState } from 'react'
import Container from '../components/Container'
import SharedHostingCard from '../components/SharedHostingCard'

const Sharedhosting = () => {
    const allPackages = [
  {
    name: "Silver",
    price: {
      usd: 2.19,
      bdt: 267.68,
    },
    priceYr: {
      usd: 26.28,
      bdt: 3212.20,
    },
    space: "5",
    bandwidth: "250",
    addon: 2,
    subdomain: 'Unlimited',
    database: 'Unlimited ',
    email: 'Unlimited ',
    backups: "Weekly",
    cpu: "1",
    ram: "1.5",
    entryprocess: 25,
    io: "20",
    controlpanel: "cPanel"
  },
    {
    name: "Platinum",
    price: {
      usd: 4.39,
      bdt: 536.59,
    },
    priceYr: {
      usd: 52.68,
      bdt: 6439.08,
    },
    space: "10",
    bandwidth: "500",
    addon: 5,
    subdomain: 'Unlimited',
    database: 'Unlimited ',
    email: 'Unlimited ',
    backups: "Weekly",
    cpu: "2",
    ram: "3",
    entryprocess: 35,
    io: "30",
    controlpanel: "cPanel"
  },
      {
    name: "Gold",
    price: {
      usd: 7.9,
      bdt: 965.62,
    },
    priceYr: {
      usd: 94.8,
      bdt: 11587.40,
    },
    space: "20",
    bandwidth: "1000",
    addon: 10,
    subdomain: 'Unlimited',
    database: 'Unlimited ',
    email: 'Unlimited ',
    backups: "Weekly",
    cpu: "2",
    ram: "3",
    entryprocess: 40,
    io: "40",
    controlpanel: "cPanel"
  },
  {
    name: "Diamond",
    price: {
      usd: 10.96,
      bdt: 1339.64,
    },
    priceYr: {
      usd: 131.52,
      bdt: 16075.69,
    },
    space: "50",
    bandwidth: "2000",
    addon: 'Unlimited',
    subdomain: 'Unlimited',
    database: 'Unlimited ',
    email: 'Unlimited ',
    backups: "Weekly",
    cpu: "2",
    ram: "3",
    entryprocess: 80,
    io: "50",
    controlpanel: "cPanel"
  }
];


    const [currency,setCurrency] = useState('USD');
    const [billing,setbilling] = useState('mo');
    console.log(billing);
    
    return (
        <>
            <section className='bg-gray-100 py-20'>
                <Container>
                    <div className="">
                        <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-2'>Web Hosting Plans</h2>
                        <p className='text-base text-gray-500 text-center'>Affordable and reliable Linux shared hosting plans tailored for optimal website performance and support.</p>
                    </div>
                    <div className="flex justify-center items-center my-6">
                        <div className="rounded-lg border border-gray-300 bg-white p-4 flex justify-between">
                            <div className="text-center">
                                <p className='text-base text-blue-950 font-medium mb-2'>Select Currency</p>
                                <div className="flex gap-2">
                                    <button onClick={()=>setCurrency('USD')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'USD' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>USD</button>
                                    <button onClick={()=>setCurrency('BDT')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${currency == 'BDT' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>BDT</button>
                                </div>
                            </div>
                            <div className="bg-gray-300 w-[1px] mx-5"></div>
                            <div className="text-center">
                                <p className='text-base text-blue-950 font-medium mb-2'>Billing Cycle</p>
                                <div className="flex gap-2">
                                    <button onClick={()=>setbilling('mo')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${billing == 'mo' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>Monthly</button>
                                    <button onClick={()=>setbilling('yr')} className={` text-base px-5 py-2 rounded-md duration-300 cursor-pointer border-blue-500 border ${billing == 'yr' ? 'bg-blue-500 text-white' : 'text-blue-500'}`}>Yearly</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                        {
                            allPackages.map((packages, index) => (
                                <SharedHostingCard
                                    name={packages.name}
                                    // price={`${currency === 'USD' ? `$${packages.price.usd} /mo` : `৳${packages.price.bdt} /mo`}`}
                                    price={`${billing === 'mo' ? `${currency === 'USD' ? `$${packages.price.usd} /mo` : `৳${packages.price.bdt} /mo`}` : `${currency === 'USD' ? `$${packages.priceYr.usd} /Yr` : `৳${packages.priceYr.bdt} /Yr`}` }`}
                                    space={packages.space}
                                    bandwidth={packages.bandwidth}
                                    addon={packages.addon}
                                    subdomain={packages.subdomain}
                                    database={packages.database}
                                    email={packages.email}
                                    backups={packages.backups}
                                    cpu={packages.cpu}
                                    ram={packages.ram}
                                    entryprocess={packages.entryprocess}
                                    io={packages.io}
                                    controlpanel={packages.controlpanel}
                                    key={index}
                                    to={'/'}
                                />
                            ))
                        }
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Sharedhosting