import React from 'react'
import HeroSection from './HeroSection'
import "../Styles/Body.css"
import Content from './Content'
import SubNavbar from "./SubNavbar"

function Body() {
  return (
      <div className='Body'>
       <HeroSection/>
       <SubNavbar/>
       <Content/>
       </div>
  )
}

export default Body