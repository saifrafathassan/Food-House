import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import Contactc from '../components/contact/Contactc';
import Faq from '../components/contact/Faq';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Contactc/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Contact
