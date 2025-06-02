import React from 'react'
import AboutNavbar from './AboutNavbar'
import AboutUs from './Aboutus'
import Footer from './Footer'
import Dinning from './Dinning'
import Bannar from './Bannar'
import LatestBlog from './LatestBlog'
import Newsletter from './Newsletter'


export default function About() {
  return (
    <div>
      <AboutNavbar />
      <AboutUs />
      <Bannar />
      <LatestBlog />

      {/* <Dinning /> */}
      <Newsletter />
      <Footer />
    </div>
  )
}
