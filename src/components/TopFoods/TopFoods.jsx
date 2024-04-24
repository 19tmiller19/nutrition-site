import React from 'react'
import './TopFoods.css'
import { assets } from '../../Assets/assets'

const TopFoods = () => {
  return (
    <div className='top-foods'>
         <div className='top-foods-header'>
            <h3>Top Rated Foods</h3>
        </div>
        <div className="food-images">
            <img className='food-img' src={assets.fringe_bar} alt='fringe bar'/>
            <img className='food-img' src={assets.Rx_Bar} alt='R-X Bar'/>
            <img className='food-img' src={assets.Kize_bar} alt='Kize Bar'/>
            <img className='food-img' src={assets.Big_Spoon_PB} alt='Big Spoon PB'/>
            <img className='food-img' src={assets.Mmmly_Cookies} alt='Big Spoon PB'/>
        </div>
        <div className="btn">
            <button className='show-more-food-btn'>Show More</button>
        </div>
    </div>
  )
}

export default TopFoods