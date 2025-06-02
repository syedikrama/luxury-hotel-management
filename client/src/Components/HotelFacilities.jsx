import React from "react";
import "./HotelFacilities.css";
import img1 from '../assets/images/explore-icon-1.png'
import img2 from '../assets/images/explore-icon-2.png'
import img3 from '../assets/images/explore-icon-3.png'
import img4 from '../assets/images/explore-icon-4.png'
import img5 from '../assets/images/explore-icon-5.png'
import img6 from '../assets/images/explore-icon-6.png'

const facilities = [
  {
    img: img1,
    title: "Quality Room",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  },
  {
    img: img2,
    title: "Private Beach",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  },
  {
    img: img3,
    title: "Best Accommodation",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  },
  {
    img: img4,
    title: "Wellness & Spa",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  },
  {
    img: img5,
    title: "Restaurants & Bars",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  },
  {
    img: img6,
    title: "Special Offers",
    desc: "Nullam molestie lacus sit amet velit fermentum feugiat. Mauris auctor eget nunc sit amet."
  }
];

export default function HotelFacilities() {
  return (
    <section className="hotel-section">
      {/* ✅ Added Explore on top */}
      <p className="subtitle light" style={{ textTransform: "uppercase", letterSpacing: "2px", marginBottom: "5px", fontWeight: "600", color: "#A6978D" }}>
        Explore
      </p>

      <h2 className="title">The Hotel</h2>
      <p className="subtitle">
        Proin consectetur non dolor vitae pulvinar. Pellentesque sollicitudin
        dolor eget neque viverra, sed interdum metus interdum.
      </p>
      <p className="subtitle light">
        Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel.
      </p>

      <div className="facility-grid container">
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon">
              <img src={item.img} alt={item.title} className="facility-img" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href="#">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
