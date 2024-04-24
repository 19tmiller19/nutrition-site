import React from 'react'
import './Footer.css'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Newsletter to get update on recent Water, Food, and Product Reviews.
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at anytime
            </p>
            <div className="input-areas">
                <form>
                <input type="email" name="email" placeholder='Your Email' className="footer-input" />
                <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-links-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to='/about'>How It Works</Link>
                    <Link to='/testing'>Trust The Process</Link>
                    <Link to='/product'>Just tell me...</Link>
                    <Link to='/'>Terms Of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Affiliates</h2>
                    <Link to='/about'>How It Works</Link>
                    <Link to='/testing'>Trust The Process</Link>
                    <Link to='/product'>Just tell me...</Link>
                    <Link to='/'>Terms Of Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Privacy</h2>
                    <Link to='/about'>How It Works</Link>
                    <Link to='/testing'>Trust The Process</Link>
                    <Link to='/product'>Just tell me...</Link>
                    <Link to='/'>Terms Of Service</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/' className="social-logo">Nutritional Navigator</Link>
                </div>
                <small className="website-rights">Nutritional Navigator © 2024</small>
                <div className="social-icons">
                    <Link className="social-icon-link-facebook" to='/' target='_blank' aria-label='Facebook'>
                        <i className='fab fa-facebook'></i>
                    </Link>
                    <Link className="social-icon-link-instagram" to='/' target='_blank' aria-label='instagram'>
                        <i className='fab fa-instagram'></i>
                    </Link>
                    <Link className="social-icon-link-twitter" to='/' target='_blank' aria-label='twitter'>
                        <i className='fab fa-twitter'></i>
                    </Link>
                </div>
            </div>
        </section>

    </div>
  )
}
