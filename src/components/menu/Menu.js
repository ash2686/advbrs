import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo30.jpg'
import './Menu.css'

const Menu = () => {

    let [state,setState] = useState(true)
    let [icon,setIcon] = useState(true)
    
    let clickMenu=()=>
    {setState(!state);
        setIcon(!icon);
    }  
   


    return (
        <>
        <a><i onClick={clickMenu} className={`main-menu-bar ${icon?'fas fa-bars':'fab fa-xing'}`}></i></a>
        <div className={state?'top-menu-main':'top-menu-main active'}>
            
            <div className="main-menu-left">

                <ul className="left-menu-block">
                 <li><Link to='/' onClick={clickMenu}>HOME</Link></li><div className='menu-line'></div>
                 <li> <Link to='/about' onClick={clickMenu}>ABOUT</Link></li><div className='menu-line'></div>
                 <li><Link to='/highlights' onClick={clickMenu}>HIGHLIGHTS</Link></li>
                </ul>

            </div>
            <div className="menu-main-logo">               
                    <img src={logo} alt="logo not found" />                 
            </div>

            <div className="main-menu-right">
                <ul className="right-menu-block">
                    <li><Link to='/expertise' onClick={clickMenu}>EXPERTISE</Link></li><div className='menu-line'></div>
                    <li><Link to='/cs' onClick={clickMenu}>CASE STUDIES</Link></li><div className='menu-line'></div>
                    <li><Link to='/contact' onClick={clickMenu}>CONTACT</Link></li>

            </ul>

            </div>

            
        </div>
        </>
    )
}

export default Menu
