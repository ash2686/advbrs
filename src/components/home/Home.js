import React from 'react'
import './Home.css'
import pic from '../../assets/pic4nbg.png'

const Home = () => {
    return (
        <div className='home-page-main'>
            <div className="home-main-block">
                <div className="home-image-container">
                        <img src={pic} alt="hero pc not loaded" />
                </div>

                <div className="home-main-text">
                    <div className="home-line"></div>
                    <h1>THE RIGHT LAWYER</h1>
                    <h3>MAKES ALL THE DIFFERENCE</h3>
                    <div className="home-line"></div>

                    <h4>B.R. Sharma has over 30 years of exerience as a trial lawyer</h4>

                    <div className="home-button">
                        <button className='home-main-button'>CASE RESULTS</button>
                        <button className="home-side-button">&#62;</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
