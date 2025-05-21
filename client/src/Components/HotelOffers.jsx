import React from "react";
import "./Offers.css";

const offers = {
  stay: [
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlbos_bedroom_in_room_dining_mood_shot_2022_hires_rgb-1:Medium?wid=1013&hei=569",
      title: "Linger Longer",
      description:
        "Stay longer and celebrate longer. Enjoy up to 25% off our Flexible Rate when you book a stay of 2 nights or more.",
    },
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/group-8@3x-2:Medium?wid=1013&hei=569",
      title: "With Our Compliments",
      description:
        "Extend your stay for a minimum three consecutive nights, at our Flexible Rate, and enjoy a complimentary night.",
    },
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlgdc_kids_mood_shot_2022_celebration:Medium?wid=1013&hei=570",
      title: "Family Celebration",
      description:
        "Celebrate with your loved ones and enjoy 50% off your second guest room and more.",
    },
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/TLJKT_The%20Langham_Club_mood_shot:Medium?wid=1013&hei=570",
      title: "Club and Suite Indulgence",
      description:
        "Experience the ultimate in luxury in our exclusive club rooms and suites.",
    },
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/SALTY%20LUXEDSC03587:Medium?wid=1013&hei=570",
      title: "Bed and Breakfast",
      description:
        "Create a perfect start to your celebration with scrumptious daily breakfast per person.",
    },
  ],
  celebrate: [
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlhr_ric_masthead_2:Medium?wid=1013&hei=570",
      title: "Resort in the City",
      description:
        "Bringing each The Langham city to vibrant life, ‘Resort in the City’ opens the door to a one-of-a-kind collection of bespoke experiences.",
    },
  ],
  wellness: [
    {
      image: "https://assets.langhamhotels.com/is/image/langhamhotelsstage/tlnyc-offers-sleep-matters:Medium?wid=1013&hei=569",
      title: "Sleep Matters by Chuan",
      description:
        "Discover the power of a good night’s sleep with our 'Sleep Matters by Chuan' programme, which features exclusive amenities and curated spa treatments.",
    },
  ],
};

function Offers() {
  return (
    <div className="offers-container">
    
      <h2 className="offers-title"> <em>OFFERS</em></h2>
      <p className="offers-description">
        We indulge you in the very best experience of our service with some unique luxury hotel deals. Explore our signature room and event offers.
      </p>
      <button className="offers-button">Book Direct</button>

    

      <Section title="Stay" offers={offers.stay} />
      <Section title="Celebrate" offers={offers.celebrate} />
      <Section title="Wellness" offers={offers.wellness} />
    </div>
  );
}

function Section({ title, offers }) {
  return (
    <div className="offer-section">
      <h3 className="section-title">{title}</h3>
      {offers.map((item, index) => (
        <div key={index} className="offer-row">
          <img src={item.image} alt={item.title} className="offer-image" />
          <div className="offer-details">
            <h4 className="offer-title">{item.title}</h4>
            <p className="offer-description">{item.description}</p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Offers;
