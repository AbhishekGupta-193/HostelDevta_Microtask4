//rafc
import React from 'react'
import { Link } from 'react-router-dom'
import '../css/landing.css'
export const Landing = () => {
  return (
    <section className='landing_wrapper'>
        <img className="logo" src="https://careers.hosteldevta.com/assets/hosteldevta-white-logo.png" alt="" /> 

        <div className="landing_info">
            <h1>HostelDevta</h1>
            <h3>Level 2 : DEVELOPMENT</h3>
        <p>This is the technical documentation as <b>Microtask 4</b> made to describe the use and architecture of the APIs and MICROSERVICES build in the previous three Microtasks .</p>
        </div>
    <div className="link_cont">
        <div className="links">
            <Link to="/mt1">Microtask 1</Link>
        </div>
        <div className="links">
            <Link to="/mt2">Microtask 2</Link>
        </div>
        <div className="links">
            <Link to="/mt3">Microtask 3</Link>
        </div>
    </div>
    </section>
  )
}

