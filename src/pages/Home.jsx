import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Success from '../components/Success'
import HostingSolution from '../components/HostingSolution'
import DomainName from '../components/DomainName'
import RightServices from '../components/RightServices'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Success/>
        <HostingSolution/>
        <DomainName/>
        <RightServices/>
    </>
  )
}

export default Home