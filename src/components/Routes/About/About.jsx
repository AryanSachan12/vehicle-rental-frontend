import React from 'react'
import NavBar from '../../Navigation/NavBar'
import HeroSection from '../../Main/HeroSection'
import AboutPage from './AboutPage'
import Information from '../../Common/Information'

const About = () => {
  return (
    <div className='bg-[#2D283D] h-max'>
      <NavBar />
      <AboutPage />
      <Information />
    </div>
  )
}

export default About