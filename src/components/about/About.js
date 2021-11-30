import React from 'react'
import './About.css'
import pic from '../../assets/pic4.jpg'

export default function About() {
    return (
        <div className='about-main'>
            <div className="about-image">
            <img src={pic} alt="about pic not loaded" />
                 <p>Ash Sharma</p>
            </div>

            <div className="about-text">
                <div className="top-text"><h1>Welcome to my page</h1></div>
                
                <div className="about-text-main">
                    <p>B.R. Sharma have over 40 years of expirience in practicing law, he speailise in insurance and bank  realted work and claims.Based in the Solan City center, he provides an efficient and fast service, With his vast expirience you can consider you neccasity met or job done. You can have a look at the other case scenarios on this webiste to have an idea about the proces.</p>

                    <p>He  have completeted my Bacholor in Law degree from HP  university Shimla in about 1980's.  Since then he has also represented his  clients at the high courts arcross northern India. </p>
                </div>  
                <div className="bottom-text">
                   <p>Adv. B.R. Sharma</p>
                </div>
            </div>
        </div>
    )
}
