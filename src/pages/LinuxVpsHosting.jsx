import React from 'react'
import VpsHero from '../components/VpsHero'
import VPSSection from '../components/VPSSection'
import OperatingSystem from '../components/OperatingSystem'
import VPSPlansInclude from '../components/VPSPlansInclude'
import ExperienceVPS from '../components/ExperienceVPS'
import VPSUses from '../components/VPSUses'
import VPSBenefits from '../components/VPSBenefits'
import VPSCompare from '../components/VPSCompare'
import VPSFAQ from '../components/VPSFAQ'

const LinuxVpsHosting = () => {
  return (
    <>
       <VpsHero/>
       <VPSSection/>
       <OperatingSystem/>
       <VPSPlansInclude/>
       <ExperienceVPS/>
       <VPSUses/>
       <VPSBenefits/>
       <VPSCompare/>
       <VPSFAQ/>
    </>
  )
}

export default LinuxVpsHosting