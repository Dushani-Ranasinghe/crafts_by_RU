import React from 'react'
import NavLogo from "../nav-logo.png"
import "../Styles/Navbar.css"

function Navbar() {
  return (
    <div className='NavBar'>
      <div className='logo-container'>
        <img src={NavLogo} alt="Logo" width="362px" height="75px"/>
        <h1>CRAFTING THE MOMENTS</h1>
        </div>
      <div className='Nav-Links'>
         <a href='/home'>HOME</a>
         <a href='/portfolio'>PORTFOLIO</a>
         <a href='/about'>ABOUT</a>
         <a href='/contact'>CONTACT</a>
      </div>
      
      Navbar
    </div>
  )
}

export default Navbar