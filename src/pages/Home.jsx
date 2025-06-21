import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Success from '../components/Success'
import HostingSolution from '../components/HostingSolution'
import DomainName from '../components/DomainName'
import RightServices from '../components/RightServices'
import FeatureCardsSection from '../components/FeatureCardsSection'
import WebsiteSetupAndMigration from '../components/WebsiteSetupAndMigration'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <Success/>
        <HostingSolution/>
        <DomainName/>
        <RightServices/>
        <FeatureCardsSection/>
        <WebsiteSetupAndMigration/>
    </>
  )
}

export default Home