import React from 'react'
import Container from './Container'
import RightServicesCard from './RightServicesCard'
import Linux from '../assets/images/linux-vps-hosting.svg'
import windows from '../assets/images/windows-vps-hosting.svg'
import googleWorkspace from '../assets/images/google-workspace.svg'
import microsoft from '../assets/images/microsoft-office-365.svg'
import shared from '../assets/images/shared-hosting.svg'
import reseller from '../assets/images/reseller-hosting.svg'

const RightServices = () => {
    return (
        <>
            <section className='bg-gray-100 py-20'>
                <Container>
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8'>Find the Right Hosting Services for Your Needs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        <RightServicesCard 
                        image={Linux}
                        title={'Linux VPS Hosting'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={windows}
                        title={'Windows VPS Hosting'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={Linux}
                        title={'Linux Dedicated Server'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={windows}
                        title={'Windows Dedicated Server'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={googleWorkspace}
                        title={'Google Workspace'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={microsoft}
                        title={'Microsoft Office 365'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={shared}
                        title={'Shared Web Hosting'}
                        to={'/'}
                        />
                        <RightServicesCard 
                        image={reseller}
                        title={'Reseller Hosting'}
                        to={'/'}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default RightServices