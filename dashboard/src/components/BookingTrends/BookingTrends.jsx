// import "./Budget.css";
// import { iconsImgs } from "../../utils/images";
// import { budget } from "../../data/data";

// const Budget = () => {
//   return (
//     <div className="grid-two-item grid-common grid-c4">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Budget</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c-top text-silver-v1">
//             <h2 className="lg-value">Cash</h2>
//             <span className="lg-value">$ 100,000</span>
//         </div>
//         <div className="grid-c4-content bg-jet">
//             <div className="grid-items">
//                 {
//                     budget.map((budget) => (
//                         <div className="grid-item" key = { budget.id }>
//                             <div className="grid-item-l">
//                                 <div className="icon">
//                                     <img src={ iconsImgs.check } />
//                                 </div>
//                                 <p className="text text-silver-v1">{ budget.title } <span>{ budget.type }</span></p>
//                             </div>
//                             <div className="grid-item-r">
//                                 <span className="text-silver-v1">$ { budget.amount }</span>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Budget







import "./Budget.css";
import { iconsImgs } from "../../utils/images";

// Sample budget data for HMS (can later be fetched dynamically)
const hotelBudget = [
  { id: 1, title: "Maintenance", type: "Monthly", amount: 20000 },
  { id: 2, title: "Staff Salaries", type: "Monthly", amount: 50000 },
  { id: 3, title: "Utilities", type: "Monthly", amount: 8000 },
  { id: 4, title: "Marketing", type: "Monthly", amount: 12000 },
];

const BookingTrends = () => {
  // Calculate total budget
  const totalBudget = hotelBudget.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="grid-two-item grid-common grid-c4">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Hotel Budget Overview</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c-top text-silver-v1">
        <h2 className="lg-value">Total Budget</h2>
        <span className="lg-value">$ {totalBudget.toLocaleString()}</span>
      </div>
      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {hotelBudget.map((item) => (
            <div className="grid-item" key={item.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.check} alt="Check Icon" />
                </div>
                <p className="text text-silver-v1">
                  {item.title} <span>{item.type}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {item.amount.toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingTrends;
