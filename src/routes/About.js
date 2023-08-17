import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aheading from '../components/about/About'
import Acontent from '../components/about/Acontent'


const About = () => {
  return (
    <div>
        <Navbar/>
        <Aheading/>
        <Acontent/>
        <Footer/>
    </div>
  )
}

export default About
