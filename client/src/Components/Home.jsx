import React from 'react'
import Navbar from './Navbar'
import Gallery from './Gallery'
import Bannar from './Bannar'
import Social from './Social'
import Footer from './Footer'
import Rooms from './Rooms'
import OurServices from './OurServices'
import CustomersReview from './CustomersReview'
import Blog from './Blog'
import HomeBlog from './HomeBlog'
import Destination from './Destination'
import Dinning from './Dinning'
import Video from './Video'
import Facilities from './Facilities'
import ExtraServices from './ExtraServices'
import AboutUs from './Aboutus'


export default function Home() {
  return (
    <div>

      <Navbar />
      {/* <Gallery /> */}
      <AboutUs />
      <Bannar />
      {/* <OurServices /> */}
      <Destination />
    
      <Facilities />
      {/* <Dinning /> */}
      <Rooms />
    {/* <HomeBlog /> */}
      <CustomersReview />
      <Video />
      <ExtraServices />
      <Footer />

    </div>
  )
}
