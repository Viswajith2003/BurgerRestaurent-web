import React,{useEffect, useState} from 'react'
import {Link} from 'react-scroll';
import logo from '../images/logo1.png';
import moon from '../images/moon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn } from '@fortawesome/free-solid-svg-icons'


function Navbar() {

  const[nav,setnav]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY >- 50){
      setnav(true)
    }
    else{
      setnav(false)
    }
  }

  window.addEventListener('scroll',changeBackground);

// Darkmode of Toggle button

const [theme,setTheme]=useState("light-theme");
const toggleTheme=()=>{
    if(theme === "dark-theme")
    {
      setTheme("light-theme");
    }else{
      setTheme("dark-theme")
    }
  }

 
  useEffect(()=>{
    document.body.className=theme;
  },[theme])
  

  return (
    <nav className={nav ? "nav active" : "nav"} >
        <Link to='main' className="logo" smooth={true} duration={2000}>
            <img src={logo} alt="" />
        </Link>
        <input className='menu-btn' type="checkbox" id='menu-btn' />
        <label htmlFor="menu-btn" className='menu-icon'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
              <li><Link to="main" smooth={true} duration={2000}>Home</Link></li>
              <li><Link to="products" smooth={true} duration={2000}>Product</Link></li>
              <li><Link to="about" smooth={true} duration={2000}>About</Link></li>
              <li><Link to="contact" smooth={true} duration={2000}>Contact</Link></li> 
        </ul>
        <img src={moon} id='icon' onClick={()=>toggleTheme()} />
        {/* <a href="#" className='btn' onClick={()=>toggleTheme()}>
            <li><FontAwesomeIcon icon="fa-regular fa-toggle-on" /> </li>
        </a> */}
        
    </nav>
  )
}

export default Navbar