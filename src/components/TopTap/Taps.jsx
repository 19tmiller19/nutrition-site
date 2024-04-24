import React from 'react'
import { Link } from 'react-router-dom'


const TapItems = (props) => {
  return (
    <>
        <li className='Tap__item'>
            <Link className='Tap__item__link' to={props.path}>
                <figure className='Tap__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt="Water Bottle" className='Tap__item__img' />
                </figure>
                <div className="Tap__item__info">
                    <h5 className='Tap__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>

    </>
  )
}

export default TapItems