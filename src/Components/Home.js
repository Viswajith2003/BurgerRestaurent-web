import React from 'react'
import front from '../images/home.png'

function Home() {
  return (
    <div id='main'>
        <div className='header-heading'>
            <h3>It's Great time For A Good Taste Of Burger</h3 >
            <h1><span>BURGER</span>FOR <br />WEEK</h1 >
            <p className='detail'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className='header-btn'>
                <a href="#" className='header-btn'>Order</a>
            </div>
        </div>
        <div className='header-img'>
            <img src={front} alt="" />
        </div>
    </div>
  )
}

export default Home