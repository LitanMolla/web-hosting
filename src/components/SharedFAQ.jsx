import React from 'react'
import Container from './Container'
import FAQ from './FAQ'

const SharedFAQ = () => {
  return (
    <>
        <section className='bg-white py-12 md:py-20'>
            <Container>
                <div className="">
                    <h2 className='font-semibold lg:text-[40px] text-3xl text-center mb-8 text-blue-950'>Shared Web Hosting - FAQ's</h2>
                    <div className="space-y-4">
                       
                        
                        <FAQ
                        title={'What is web hosting?'}
                        details={"Web hosting in simple terms can be referred to as that service which lets users ( either individuals or organizations) post their website(s) on the internet. In other words, it is a service or facility which let users host their website on the internet. It allows user’s web pages to be published on the internet."}
                        />
                        <FAQ
                        title={'What is shared hosting?'}
                        details={"As the name suggests, it is a type of web hosting where users can host their websites on the internet in sharing i.e. multiple websites can be hosted on a single server in this type of hosting. This type of hosting is also considered one of the most economical ones for those who are newbies or have small businesses. There are 2 types of shared hosting where users can select one of their own choices, namely: Windows shared hosting & Linux shared hosting."}
                        />
                        <FAQ
                        title={'What is Linux shared hosting?'}
                        details={"Linux Shared Hosting is a popular hosting plan for any personal or business website. If you want to get a hosting business online then choosing Linux Hosting is the right idea for you. This kind of hosting is a great idea for all those businesses who want to get rented space for online business. Sometimes, this type of hosting plan is also known as shared services or virtual hosting as multiple websites. Shared Linux Hosting is a single physical server that can host multiple websites at the same time. That means, this kind of hosting plan is ideal for all those people who want to use the resources on a single server."}
                        />
                        <FAQ
                        title={'Which shared hosting plan should I prefer?'}
                        details={"Based on the specifications required by your website/business, one can easily figure out which shared hosting service would be the best to consider for your own website. However, there are few important yet common points which one must look into before buying any of the shared web hosting."}
                        />
                        <FAQ
                        title={'Why should I choose cPanel web hosting?'}
                        details={"cPanel web hosting is considered best as here you have complete control on how to manage your website and it's functionalities. One can easily manage their websites and also can avail other additional features when they opt for cPanel web hosting."}
                        />
                        <FAQ
                        title={'Is cPanel needed for managing a website?'}
                        details={"cPanel is an important aspect of hosting and managing the website. It makes the functioning of web pages simpler and effective. There are various features and functions which enable a user to develop and manage their website."}
                        />
                        <FAQ
                        title={'Can I upgrade to a more powerful hosting plan later?'}
                        details={"Max Cloud Host offers the facility where one can easily upgrade their web hosting plans in minimal time. Users just need to select the plan to which they wish to upgrade and rest is an easy process to proceed!"}
                        />
                        <FAQ
                        title={'Is shared hosting good for small business website?'}
                        details={"Yes, shared hosting is a good choice for small business websites. With shared hosting, your website is stored on the same server as other websites, and you share resources like CPU, RAM, and storage space. It is a cost-effective option, particularly for small businesses in their initial stages."}
                        />
                        <FAQ
                        title={'Can I use Existing Domain to buy shared web hosting plans?'}
                        details={"Yеs, you can usе an еxisting domain namе whеn purchasing a nеw shared wеb hosting plan. Wеb hosting companies, including Max Cloud Host, allow you to use your current domain name with their hosting plans. To do this, you'll nееd to updatе thе namеsеrvеrs of your domain to point to your nеw hosting account."}
                        />
                        <FAQ
                        title={'What is the difference between vps hosting and shared hosting?'}
                        details={"The VPS (Virtual Private Server) and Shared hosting are both types of web hosting but they will differ in performance, control and cost. In shared hosting, there are multiple websites that share the same server resources, including CPU, RAM and Bandwidth. This can lead to slower performance, especially when other websites on the server experience high traffic. Shared hosting is more affordable, making it suitable for small websites or personal blogs. Whereas, VPS Hosting provides a virtualized environment where each website operates on its own isolated section of a physical server. This means dedicated resources such as CPU, RAM and storage are allocated to your website. VPS will offer better performance, customization, and security compared to the shared hosting. It is ideal for businesses or websites with high traffic and specific technical requirements."}
                        />
                        <FAQ
                        title={'What is the difference between shared hosting and dedicated hosting?'}
                        details={"Shared hosting and dedicated hosting has the difference in resource allocation and control. In shared hosting, multiple websites share the same server and its resources, such as CPU, RAM, and bandwidth. This makes it cost-effective but can result in slower performance and limited control over server settings. In dedicated hosting, your website has an entire server to itself, offering exclusive access to all server resources. This leads to better performance, higher security, and greater control over server configurations, hence making it ideal for the high traffic websites with technical needs."}
                        />
                        <FAQ
                        title={'Can I migrate my existing website to Max Cloud Host shared web hosting?'}
                        details={"Yes, We will provide you with all the necessary assistance to migrate your existing website to Max Cloud Host Shared Web Hosting. To get started, contact our customer support team for guidance. Provide details about your current hosting details, and they will migrate your website easily."}
                        />

                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default SharedFAQ