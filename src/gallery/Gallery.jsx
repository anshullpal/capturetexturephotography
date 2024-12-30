import React from 'react'
import PageGallery from '../components/PageGallery'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FloatingButton from '../components/FloatingButton'

function Gallery() {
  return (
<>
<div>
    <Navbar/>
    <PageGallery/>
    <FloatingButton/>
    <Footer/>
</div>
</>  )
}

export default Gallery