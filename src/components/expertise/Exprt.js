import React from 'react'
import './Exprt.css'
import {Link} from 'react-router-dom'


const Exprt = ({img,heading,para}) => {
    return (
     <div className="exprt-main">
            <div className="exprt-image">
                    <img src={img} alt="no image found" />
            </div>
            <div className="exprt-text-main">
                <div className="exprt-heading">
                      <h2>{heading}</h2>
                </div>
                <div className="exprt-para">
                        <p>{para}</p>
                </div>
            </div>
        </div>
     
    )
}

export default Exprt
