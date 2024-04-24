import React from 'react'
import './FoodHero.css'
import { assets } from '../../Assets/assets'

const FoodHero = () => {
  return (
<>
    <div className='FoodHero'>
    <img className='food-hero-img' src={assets.food_card_img} alt='food'/>
        <h1>Does my food contain what I think it does...</h1>
        <p>Search food by brand or product to see what it might contain</p>
            <form id='food-search-form'>
                <input type="text" id="food-search-box" placeholder="Search by foods or brands here..."/>
                <button>Search</button>
            </form> 
    </div>

</>
  )
}

export default FoodHero