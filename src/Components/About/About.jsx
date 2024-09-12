import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play.png'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
        </div>
        <div className="about-right">
            <h3>About Us</h3>
            <h2>Building the Innovators of Tomorrow</h2>
            <p>We empower learners with the skills to excel in the dynamic tech world. Specializing in Data Structures and Algorithms (DSA), MERN stack development, and AI/ML, we bridge the gap between academic knowledge and real-world application.</p>
            <p>
            Our DSA courses strengthen problem-solving skills for technical interviews and software development. The MERN stack curriculum covers full-stack development with React, Node.js, and MongoDB. AI/ML programs offer in-depth knowledge of algorithms and industry tools.</p>
            <p>
            We focus on hands-on, project-based learning, ensuring students apply theory to real-world challenges. With expert instructors and top resources, Academix is your partner in achieving tech career goals. Start your journey to becoming a confident tech professional with us.</p>

        </div>
    </div>
  )
}

export default About