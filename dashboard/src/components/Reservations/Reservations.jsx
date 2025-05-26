// import "./Transactions.css";
// import { transactions } from "../../data/data";
// import { iconsImgs } from "../../utils/images";

// const Transactions = () => {
//   return (
//     <div className="grid-one-item grid-common grid-c2">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">All Transactions</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>

//         <div className="grid-content">
//             <div className="grid-items">
//                 {
//                     transactions.map((transaction) => (
//                         <div className="grid-item" key = { transaction.id }>
//                             <div className="grid-item-l">
//                                 <div className="avatar img-fit-cover">
//                                     <img src={ transaction.image } alt="" />
//                                 </div>
//                                 <p className="text">{ transaction.name } <span>{ transaction.date }</span></p>
//                             </div>
//                             <div className="grid-item-r">
//                                 <span className="text-scarlet">$ { transaction.amount }</span>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Transactions




import "./Transactions.css";
// You can replace this dummy data with real data from backend API later
const recentReservations = [
  {
    id: 1,
    guestName: "John Doe",
    roomNumber: "101",
    checkInDate: "2025-05-22",
    checkOutDate: "2025-05-25",
    totalAmount: 320,
  },
  {
    id: 2,
    guestName: "Jane Smith",
    roomNumber: "202",
    checkInDate: "2025-05-23",
    checkOutDate: "2025-05-24",
    totalAmount: 150,
  },
  {
    id: 3,
    guestName: "Ali Khan",
    roomNumber: "303",
    checkInDate: "2025-05-25",
    checkOutDate: "2025-05-27",
    totalAmount: 450,
  },
];

const Reservations = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Recent Reservations</h3>
        <button className="grid-c-title-icon">
          <img src="/icons/plus.svg" alt="Add" />
        </button>
      </div>

      <div className="grid-content">
        <div className="grid-items">
          {recentReservations.map((resv) => (
            <div className="grid-item" key={resv.id}>
              <div className="grid-item-l">
                {/* For guest avatar, you can add images later */}
                <div className="avatar img-fit-cover">
                  <img src="/images/default-guest.png" alt={resv.guestName} />
                </div>
                <p className="text">
                  {resv.guestName} <span>Room {resv.roomNumber}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">
                  ${resv.totalAmount} ({resv.checkInDate} to {resv.checkOutDate})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
