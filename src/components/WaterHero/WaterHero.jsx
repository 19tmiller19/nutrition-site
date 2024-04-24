import React from 'react'
import './WaterHero.css'
import { assets } from '../../Assets/assets'

const WaterHero = () => {
  return (
    <>
    <div className='WaterHero'>
        <h1>Whats In Your Water?</h1>
        <p>Search bottled water, locations of tap water and filters to see what it might contain</p>
        <form id='search-form'>
        <input type="text" id="search-box" placeholder="Search anything here..."/>
        <button>Search</button>
        </form> 
        <img className='water-hero-img' src={assets.waterHero_img} alt='water'/>
    </div>

    </>
  )
}

export default WaterHero