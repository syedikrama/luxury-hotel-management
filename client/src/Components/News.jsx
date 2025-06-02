import React from 'react'
import ServicesNavbar from './NewsNavbar'
import OurServices from './OurServices'
import CustomersReview from './CustomersReview'
import Footer from './Footer'
import Blog from './Blog'
import FacilitiesNavbar from './FacilitiesNavbar'
import HotelFacilities from './HotelFacilities'
import Bannar from './Bannar'
import BookingForm from './BookingForm'


export default function Services() {
  return (
    <div>
        <FacilitiesNavbar />
       <HotelFacilities  />
       <Bannar />
       <BookingForm />
        <CustomersReview />
        <Footer />
    </div>
  )
}
