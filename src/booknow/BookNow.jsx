import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceSelection from '../components/ServiceSelection'

function BookNow() {
  return (
    <>
    <div>
      <Navbar/>
      <ServiceSelection/>
      <Footer/>
    </div>
    </>
  )
}

export default BookNow