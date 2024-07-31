import React from 'react'
import NavBar from '../Navigation/NavBar'
import HeroSection from './HeroSection'
import { Outlet, useLocation } from 'react-router-dom'

const MainPage = () => {
  const url = useLocation().pathname
  const showHero = (url !== '/login' && url !== '/register') ? true : false;

  return (
    <div className='bg-[#2D283D] h-max'>
        <NavBar />
        {showHero ? <HeroSection /> : null}
        <Outlet />
    </div>
  )
}

export default MainPage