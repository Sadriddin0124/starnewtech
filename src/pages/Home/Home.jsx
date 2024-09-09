import React from 'react'
import Hero from '../../components/Hero/Hero'
import SpecialOrders from '../../components/SpecialOrders/SpecialOrders'
import Services from '../../components/Services/Services'
import Tariff from '../../components/Tariff/Tariff'
import Company from '../../components/Company/Company'
import Blogs from '../../components/Blogs/Blogs'
import Contacts from '../../components/Contacts/Contacts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <SpecialOrders/>
      <Services/>
      <Tariff/>
      <Company/>
      <Blogs/>
      <Contacts/>
    </div>
  )
}

export default Home
