import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next.png'
import back_icon from '../../assets/back.png'
import user_icon from '../../assets/user_icon.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if(tx > -50){
            tx -=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () => {
        if(tx < 0){
            tx +=25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="Testimonials">
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_icon} alt="" />
                            <div>
                                <h3>Aditya Gupta</h3>
                                <span>New Delhi</span>
                            </div>
                        </div>
                        <p>The MERN stack training was practical, enabling me to build full-stack applications from scratch with confidence.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_icon} alt="" />
                            <div>
                                <h3>Jaykishan</h3>
                                <span>New Delhi</span>
                            </div>
                        </div>
                        <p>The DSA course significantly improved my problem-solving skills, helping me secure a job in software development.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_icon} alt="" />
                            <div>
                                <h3>Siddhant</h3>
                                <span>New Delhi</span>
                            </div>
                        </div>
                        <p>The AI/ML program provided me with essential skills, bridging the gap between theory and practical applications.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_icon} alt="" />
                            <div>
                                <h3>Karan</h3>
                                <span>New Delhi</span>
                            </div>
                        </div>
                        <p>Supportive instructors and hands-on projects made learning effective and enjoyable, accelerating my career in tech.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials