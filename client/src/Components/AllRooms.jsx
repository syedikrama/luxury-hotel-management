import React from 'react';
import './AllRooms.css';
import { Link } from 'react-router-dom';


const rooms = [
    {
        image: 'https://image.made-in-china.com/2f0j00QeTUaIqKuLbu/High-End-Hotel-Lobby-White-Color-Steel-Curved-Stairs-Modern-Staircase.jpg',
        title: 'Double Room',
        price: '129$',
        size: '30 ft',
        capacity: 'Max person 2',
        bed: 'Double Bed',
        services: 'Wifi, TV, Bathroom...'
    },
    {
        image: 'https://images.stockcake.com/public/b/b/0/bb0de6b2-a465-4d4a-86d1-1b484cff13c0_large/elegant-bedroom-interior-stockcake.jpg',
        title: 'Deluxe Room',
        price: '149$',
        size: '32 ft',
        capacity: 'Max person 3',
        bed: 'Queen Bed',
        services: 'Wifi, Balcony, Jacuzzi...'
    },
    {
        image: 'https://catalogue.visionnaire-home.com/sites/default/files/products/gallery/FuoriSalone23-1086_0.jpg',
        title: 'Premium Room',
        price: '169$',
        size: '35 ft',
        capacity: 'Max person 4',
        bed: 'King Bed',
        services: 'Wifi, Bathtub, AC...'
    },
    {
        image: 'https://regalia.com.pk/wp-content/uploads/2023/04/FAMILY-ROOM-1-2.jpg',
        title: 'Family Suite',
        price: '199$',
        size: '40 ft',
        capacity: 'Max person 5',
        bed: '2 Queen Beds',
        services: 'Wifi, TV, Kids Area...'
    },
    // Adding 4 new room cards
    {
        image: 'https://m.ahstatic.com/is/image/accorhotels/Mo%CC%88venpick%20Karachi%20023:8by10?wid=412&hei=515&dpr=on,2.625&qlt=75&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB',
        title: 'Executive Room',
        price: '179$',
        size: '38 ft',
        capacity: 'Max person 3',
        bed: 'King Bed',
        services: 'Wifi, AC, Minibar...'
    },
    {
        image: 'https://www.dorchestercollection.com/media/1godolvf/the-lana-junior-suite-b-1418-dorchestercollection-full-size.jpg',
        title: 'Junior Suite',
        price: '159$',
        size: '33 ft',
        capacity: 'Max person 2',
        bed: 'Double Bed',
        services: 'Wifi, Bathtub, Balcony...'
    },
    {
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/38631488.jpg?k=3b3fa055bd636e47ac0ea1154b5a2c1a85eebb2e03b8a920051c927897ce9e4e&o=&hp=1',
        title: 'Penthouse Suite',
        price: '299$',
        size: '50 ft',
        capacity: 'Max person 6',
        bed: 'King Bed, Sofa Bed',
        services: 'Wifi, Private Pool, Sauna...'
    },
    {
        image: 'https://www.enashipai.com/wp-content/uploads/2022/06/Honeymoon-2.jpg',
        title: 'Honeymoon Suite',
        price: '229$',
        size: '40 ft',
        capacity: 'Max person 2',
        bed: 'King Bed',
        services: 'Wifi, Jacuzzi, Ocean View...'
    },
     {
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/bf/f7/11/premier-garden-view-rooms.jpg',
        title: 'Garden View Room',
        price: '189$',
        size: '36 ft',
        capacity: 'Max person 3',
        bed: 'Queen Bed',
        services: 'Wifi, Garden Access, Lounge Area...'
    }
];

export default function AllRooms() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 20px' }}>
        {/* <div className="gallery-text-section">
          <h2 style={{ marginTop: "10px" }}>
            Our <em>Rooms</em> & Comfort
          </h2>
          <p style={{ marginTop: "10px" }}>
            Discover our luxurious rooms designed for every type of traveler. Whether you're seeking a cozy Double Room or a spacious Family Suite, each room offers modern amenities, elegant interiors, and ultimate comfort. Enjoy features like king-size beds, free Wi-Fi, and scenic views — all crafted to make your stay unforgettable.
          </p>
        </div> */}
      </div>

      <div className="rooms-wrapper" >
        {rooms.map((room, index) => (
          <div className="room-card" key={index} style={{width :"380px"}}> 
            <img src={room.image} alt={room.title} className="room-image" />
            <div className="room-details">
              <h3><em>{room.title}</em></h3>
              <p className="price">{room.price} <span>/Pernight</span></p>
              <ul>
                <li><strong>Size:</strong> {room.size}</li>
                <li><strong>Capacity:</strong> {room.capacity}</li>
                <li><strong>Bed:</strong> {room.bed}</li>
                <li><strong>Services:</strong> {room.services}</li>

                <Link to="/Details" style={{color :"black" , fontSize :"16px", marginTop :"10px"}}>Read More</Link>
                {/* <p className='fw-bold' style={{marginTop :"30px" , fontSize :"20px" , textDecoration : "underline"}}>MORE DETAILS</p> */}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

