import React from 'react'
import './TopTap.css'
import { assets } from '../../Assets/assets'
import './Taps.jsx'
import TapItems from './Taps.jsx'

const TopTap = () => {
  return (
    <>
    <div className='top-tap'>
         <div className='top-tap-header'>
            <h3>Tap Water By Location</h3>
        </div>
    </div>
       <div className='Taps'>
       <div className="Taps__container">
           <div className="Taps__wrapper">
               <ul className='Taps__items'>
                   <TapItems 
                   src={assets.NYC}
                   text='Manhattan, New York'
                   label='Tap Water'
                   path='/water'/>
                    <TapItems 
                   src={assets.SanDiego}
                   text='San Diego, California'
                   label='Tap Water'
                   path='/water'/>
                   <TapItems 
                   src={assets.Miami}
                   text='Miami, Florida'
                   label='Tap Water'
                   path='/water'/>
                   <TapItems 
                   src={assets.Jackson_wy}
                   text='Jackson, Wyoming'
                   label='Tap Water'
                   path='/water'/>
                   <TapItems 
                   src={assets.Baltimore}
                   text='Baltimore, Maryland'
                   label='Tap Water'
                   path='/water'/>
               </ul>
           </div>
       </div>
   </div>
   <div className="btn">
            <button className='show-more-locations-btn'>Show More</button>
    </div>
   </>
 )
}

export default TopTap