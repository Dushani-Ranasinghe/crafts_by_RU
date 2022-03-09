import React from 'react'
import prevBtn from "../Resources/prev.png"
import nxtBtn from "../Resources/right.png"
import "../Styles/HeroSection.css"

function HeroSection() {
  return (
    <div className='HeroSection'>
        <div className='Hero-img-container'>
        <button>
            <img src={prevBtn} alt="Previous"/>
         </button>
            <h1>CRAFTS <br/> THAT <br/>SPEAKS<br/> ITS <br/>STORY</h1>
            <button> <img src={nxtBtn} alt="Next"/></button>
           
     
        </div>
    </div>
  )
}

export default HeroSection