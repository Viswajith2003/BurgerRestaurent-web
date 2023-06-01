import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>BOOK YOUR TABLE</h1>
        <form >
            <input type="text" placeholder="Enter Your Fullname" />
            <input type="email" placeholder="Enter Your Email" />
            <textarea placeholder='Write Here....'></textarea>
            <input type="submit" value="BOOk" className='contact-btn'/>
        </form>
    </div>
  )
}

export default Contact