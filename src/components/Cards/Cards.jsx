import React from 'react'
import CardItems from './CardItems'
import './Cards.css'
import { assets } from '../../Assets/assets'



const Cards = () => {
  return (
    <div className='cards'>
        <h1>Check Out the Nutrition</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className='cards__items'>
                    <CardItems 
                    src={assets.Water_bottle}
                    text='Explore Our Water Ratings'
                    label='water'
                    path='/water'/>
                     <CardItems 
                    src={assets.food_card_img}
                    text='Check Out our Food Ratings'
                    label='Foods'
                    path='/food'/>
                    <CardItems 
                    src={assets.rating_img}
                    text='How are Ratings System Works'
                    label='Testing'
                    path='/testing'/>
                    <CardItems 
                    src={assets.fringe}
                    text='Some of the Products We Recommend'
                    label='Products'
                    path='/products'/>
                    <CardItems 
                    src={assets.who_we_are}
                    text='What were About'
                    label='About'
                    path='/about'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards 