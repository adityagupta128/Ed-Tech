import React from 'react'
import '../Hero/Hero.css'
import down from '../../assets/down.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero_text">
            <h1>We Ensure Better Education for Better World</h1>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences neede to excel in the dynamic field of education</p>
            <button className='btn'>Explore More <img src={down} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero