import Hero from '../components/Hero'
import Success from '../components/Success'
import HostingSolution from '../components/HostingSolution'
import DomainName from '../components/DomainName'
import RightServices from '../components/RightServices'
import FeatureCardsSection from '../components/FeatureCardsSection'
import WebsiteSetupAndMigration from '../components/WebsiteSetupAndMigration'
import Feedback from '../components/Feedback'
import Frequently from '../components/Frequently'

const Home = () => {
  return (
    <>
        <Hero/>
        <Success/>
        <HostingSolution/>
        <DomainName/>
        <RightServices/>
        <FeatureCardsSection/>
        <WebsiteSetupAndMigration/>
        <Feedback/>
        <Frequently/>
    </>
  )
}

export default Home