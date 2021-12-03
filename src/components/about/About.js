import React from 'react'
import './About.css'
import pic from '../../assets/pic4.png'

export default function About() {
    return (
        <div className='about-main'>
            <div className="about-image">
            <img src={pic} alt="about pic not loaded" />
                 {/* <p>Leo</p> */}
            </div>

            <div className="about-text">
                <div className="top-text"><h1>Welcome to my page</h1></div>
                
                <div className="about-text-main">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium iure magnam atque amet debitis consequatur dolore, explicabo, velit deleniti expedita, accusamus at ipsam aliquam error rerum inventore repudiandae sequi dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam, provident saepe incidunt officiis expedita nobis quis ratione, quod esse officia odit? Ad, labore cumque. Cumque atque eaque sunt autem.
                </div>  
                <div className="bottom-text">
                </div>
            </div>
        </div>
    )
}
