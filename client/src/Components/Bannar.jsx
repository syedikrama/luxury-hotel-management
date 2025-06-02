import React from 'react';
import './Bannar.css';
import bedimg from '../assets/images/feature.png'


export default function Bannar() {
  return (
    <div className="bannar-container">
      <div className="bannar-left">
        <img
          src= {bedimg}
          alt="Luxury Room"
          className="bannar-image"
        />
      </div>
      <div className="bannar-right">
        <h4 className="subheading">Luxury Hotel & Resort</h4>
        <h1 className="heading">Pearl Of The Adriatic.</h1>
        <p className="description">
          Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium.
          Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.
          Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam.
        </p>
        <p className="description">
          Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna.
          Integer id ultricies elit. Suspendisse varius ante eget.
        </p>
        <button className="discover-button">DISCOVER MORE</button>
      </div>
    </div>
  );
}
