import React from 'react'
import './RatingRubric.css'

const RatingRubric = () => {
  return (
    <div className='Rating-Rubric'>
        <div className="rating-header">
        <h2>How We Rate Water</h2>
        <p> The formula for Navigational Nutritions Scoring System</p>
        </div>
        <img className='rating-water-logo' src={'/'} alt='logo'/>
        <div className="overview">
            <h4>OverView</h4>
            <p>We all need water, but not all water is the same. Whether it's bottled, straight from the tap, or filtered, understanding the cleanliness and health of water is vital for taking care of our health and supporting longevity. Every water has it's own unique characteristics and we've created a scoring system to help you understand the quality of the water you drink.
            Please note our scoring system is subject to change in light of new scientific evidence and research. We choose to open-source our scoring system to allow for transparency and to encourage feedback and improvement.</p>
        <div className="score-explained">
            <h4>How we score our bottled water</h4>
            <p>Everything is scored out of 100 and we penalize each item depending on a few factors.</p>
            <p>Factors we consider:</p>
            <ul className='score-factors'>
                <li>Source</li>
                <li>Contaminant Amount</li>
                <li>Packaging and Filtration Method</li>
                <li>Filtration Method</li>
            </ul>

        </div>
        </div>

    </div>
  )
}

export default RatingRubric