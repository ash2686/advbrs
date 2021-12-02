import React from 'react'
import './Expertise.css'
import Exprt from './Exprt'
import {Link} from 'react-router-dom'
import insurance from '../../assets/insurance.jpg'
import banking from '../../assets/banking.jpg'
import marraige from '../../assets/marraige.jpg'
import law from '../../assets/law.jpg'
import traffic from '../../assets/traffic.png'
import business from '../../assets/business.png'

const Expertise = () => {
    return (
        <div className='expertise-main'>
          <div className="expertise-block1">
         <Exprt 
                img = {insurance}
                 heading='Insurance Claims'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'
                 
          />

<Exprt             
                img = {banking}
                 heading='Banking Claims'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'                  
          />

  <Exprt 
                img = {marraige}
                 heading='Marraige Disputes'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'
          />
        
          </div>

          <div className="expertise-block2">
          <Exprt 
                img = {business}
                 heading='Business Matters'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'
          />

           <Exprt 
                img = {law}
                 heading='General Law'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'
          />

            <Exprt 
                img = {traffic}
                 heading='Traffic Offenses'
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, provident? Beatae soluta nisi unde modi?'
          />
         
          </div>
         
        </div>
    )
}

export default Expertise

