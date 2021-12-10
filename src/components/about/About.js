import React from 'react'
import './About.css'
import pic from '../../assets/about.jpg'

export default function About() {
    return (
        <div className='about-main'>
            <div className="about-image">
            <img src={pic} alt="about pic not loaded" />
            </div>

            <div className="about-text">
                <div className="top-text"><h1>Welcome to my page</h1></div>
                
                <div className="about-text-main">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium iure magnam atque amet debitis consequatur dolore, explicabo, velit deleniti expedita, accusamus at ipsam aliquam error rerum inventore repudiandae sequi dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, totam, provident saepe incidunt officiis expedita nobis quis ratione, quod esse officia odit? Ad, labore cumque. Cumque atque eaque sunt autem.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quis quo sit ullam, consectetur excepturi adipisci dolore libero, minus fugiat possimus nihil exercitationem harum ea animi culpa repellendus officia quae.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit, delectus natus explicabo tempore quia praesentium. Fugiat architecto fuga numquam commodi sapiente doloremque id distinctio laborum iusto vero accusamus minus, ratione ducimus, odio assumenda. Maiores debitis quod unde doloremque placeat maxime perspiciatis optio totam eos officia? Quibusdam ullam porro fugit?</p>
                </div>  
                <div className="bottom-text">
                </div>
            </div>
        </div>
    )
}
