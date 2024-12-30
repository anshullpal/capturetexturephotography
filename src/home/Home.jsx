import React from 'react'
import Navbar from '../components/Navbar'
import Biography from '../components/Biography'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Data from '../components/Data'
import Footer from '../components/Footer'
import Testimonials from '../components/testimonials'
import Portfolio from '../components/Portfolio'
import FloatingButton from '../components/FloatingButton'
function Home() {
  return (<>
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <Features/>
    <Biography/>
    <Data/>  
    <Testimonials/>
    <FloatingButton/>
    <Footer/>
    </>
    )
}

export default Home