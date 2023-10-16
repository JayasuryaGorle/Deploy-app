import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
    <div>
        
       <h1 id='heading'><b>Ready to watch?</b></h1>
      
       <h1 id='main'>Xstream Play</h1>
      <h1 id='about'>Continue Watching'</h1>
      <h2 id='aboutApp'>Enjoy big movies,and more from ₹ 1.</h2>
      <video src='../videos/leo.mp4' controls ="" loop autoPlay muted></video>
      <Link className="login" to="/Login">Get Started ▶️</Link>
     
    </div>
  )
}

export default About