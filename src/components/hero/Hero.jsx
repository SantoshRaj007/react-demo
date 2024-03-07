import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/image/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <h1>We Ensure better support facility</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className='btn'>Explore more <img src={dark_arrow} className='' /></button>
            </div>
        </div>
    )
}

export default Hero
