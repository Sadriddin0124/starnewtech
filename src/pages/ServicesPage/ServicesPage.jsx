import React from 'react'
import ServicesHeroSection from '../../components/ServiceHero/ServiceHero'
import Services from '../../components/Services/Services'
import Contacts from '../../components/Contacts/Contacts'
import UserScenarios from '../../components/Scenario/Scenario'

const ServicesPage = () => {
  return (
    <div>
      <ServicesHeroSection/>
      <Services/>
      <UserScenarios/>
      <Contacts/>
    </div>
  )
}

export default ServicesPage
