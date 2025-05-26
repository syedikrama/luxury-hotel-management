// import { iconsImgs } from "../../utils/images";
// import "./Cards.css";

// const Cards = () => {
//   return (
//     <div className="grid-one-item grid-common grid-c1">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Cards</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c1-content">
//             <p>Balance</p>
//             <div className="lg-value">$ 22,000</div>
//             <div className="card-wrapper">
//                 <span className="card-pin-hidden">**** **** **** </span>
//                 <span>1234</span>
//             </div>
//             <div className="card-logo-wrapper">
//                 <div>
//                     <p className="text text-silver-v1 expiry-text">Expires</p>
//                     <p className="text text-sm text-white">12/22</p>
//                 </div>
//                 <div className="card-logo">
//                     <div className="logo-shape1"></div>
//                     <div className="logo-shape2"></div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Cards






import { iconsImgs } from "../../utils/images";
import "./Cards.css"; // We'll adjust styling later

const RoomCards = () => {
  return (
    <div className="grid-one-item grid-common grid-c1">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Dashboard Overview</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c1-content">
        <div className="stat-item">
          <p>Total Bookings</p>
          <div className="lg-value">124</div>
        </div>

        <div className="stat-item">
          <p>Total Revenue</p>
          <div className="lg-value">$45,320</div>
        </div>

        <div className="stat-item">
          <p>Occupied Rooms</p>
          <div className="lg-value">58</div>
        </div>

        <div className="stat-item">
          <p>Guests Today</p>
          <div className="lg-value">74</div>
        </div>
      </div>
    </div>
  );
};

export default RoomCards;
