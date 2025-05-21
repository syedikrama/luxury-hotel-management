import React from 'react'
import ServicesNavbar from './NewsNavbar'
import OurServices from './OurServices'
import CustomersReview from './CustomersReview'
import Footer from './Footer'
import Blog from './Blog'


export default function Services() {
  return (
    <div>
        <ServicesNavbar />
        {/* <OurServices /> */}
        <Blog />
        {/* <CustomersReview /> */}
        <Footer />
    </div>
  )
}
