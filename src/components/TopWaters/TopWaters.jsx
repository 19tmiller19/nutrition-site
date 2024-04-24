import React from 'react'
import './TopWaters.css'
import { assets } from '../../Assets/assets'

const TopWaters = () => {
  return (
    <div className='top-waters'>
        <div className='top-waters-header'>
            <h3>Top Rated Water Bottles</h3>
        </div>
        <div className="water-bottle-images">
            <img className='bottle-img' src={assets.erewhon} alt='erewhon bottle'/>
            <img className='bottle-img' src={assets.Liquid_Death} alt='liquid death'/>
            <img className='bottle-img' src={assets.Just_water} alt='Just-Water'/>
            <img className='bottle-img' src={assets.Waiakea} alt='waiakea water'/>
            <img className='bottle-img' src={assets.Mountain_valley} alt='Mountain Valley Water'/>
        </div>
        <div className="btn">
            <button className='show-more-btn'>Show More</button>
        </div>

    </div>
  )
}

export default TopWaters