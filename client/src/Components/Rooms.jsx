import React from 'react';
import './Rooms.css';

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
    }
];

export default function Rooms() {
    return (
        <div className="rooms-wrapper-home">
            {rooms.map((room, index) => (
                <div className="room-card-home" key={index}>
                    <img src={room.image} alt={room.title} className="room-image-home" />
                    <div className="room-info-home">
                        <h3><em>{room.title}</em></h3>
                        <p>{room.price} <span style={{ color: "white", fontSize: "16px" }}>/Pernight</span></p>
                    </div>
                    <div className="room-hover-overlay">
                        <h4><em>{room.title}</em></h4>
                        <p><strong>Price:</strong> {room.price}</p>
                        <p><strong>Size:</strong> {room.size}</p>
                        <p><strong>Capacity:</strong> {room.capacity}</p>
                        <p><strong>Bed:</strong> {room.bed}</p>
                        <p><strong>Services:</strong> {room.services}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
