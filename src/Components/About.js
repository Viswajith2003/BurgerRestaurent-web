import React from 'react'
import aboutimage from '../images/about.png'

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENT</h1>
            <p>Lorem ipsam dolor ait amet sonsectetur adiposing elit. Ipsa eum xum expedita.Voluptas ratione 
                asdfadsf asdfasfd sdfadsf asdfasdfsdd asdfsdf asdfaddfasdf asdfasdf sfdasdf 
            </p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt="" />
        </div>
    </div>
  )
}

export default About