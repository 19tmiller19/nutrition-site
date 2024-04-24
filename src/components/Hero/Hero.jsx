import React from 'react'
import './Hero.css'
import { Button } from '../Button'



const Hero = () => {
  return (
    <div className='hero-container'>
       
        <h1>Nutrition Made Simple</h1>
        <p>Because what we eat and drink should not be so complicated</p>
        <div className="hero-btns">
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>Discover</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>Subscribe</Button>
        </div>

    </div>
  )
}

export default Hero