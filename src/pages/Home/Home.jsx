import React, { useRef, useState } from 'react'
import Hero from '../../components/Hero/Hero'
import SpecialOrders from '../../components/SpecialOrders/SpecialOrders'
import Services from '../../components/Services/Services'
import Tariff from '../../components/Tariff/Tariff'
import Company from '../../components/Company/Company'
import Blogs from '../../components/Blogs/Blogs'
import Contacts from '../../components/Contacts/Contacts'
import UserScenarios from '../../components/Scenario/Scenario'

const Home = () => {
  const divRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
console.log(scrollHeight);

  const handleScroll = () => {
    if (divRef.current) {
      setScrollHeight(divRef.current.scrollTop); // Get scroll position of the element
    }
  };
  return (
    <div ref={divRef} onScroll={handleScroll} className='min-h-[1000px]'>
      <Hero/>
      <SpecialOrders/>
      <Services/>
      <UserScenarios/>
      <Tariff/>
      <Company/>
      <Blogs/>
      <Contacts/>
    </div>
  )
}

export default Home
