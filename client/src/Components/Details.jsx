import React from 'react'
import Navbar from './Navbar'
import RoomsDetails from './RoomsDetails'
import Footer from './Footer'
import DetailsNavbar from './DetailsNavbar'

export default function Details() {
  return (

    <div>
     <DetailsNavbar />
        <RoomsDetails />
        <Footer />
    </div>
  )
}
