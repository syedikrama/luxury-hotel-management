// import { iconsImgs } from "../../utils/images";
// import "./Loans.css";

// const Loans = () => {
//   return (
//     <div className="subgrid-two-item grid-common grid-c7">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Loans</h3>
//             <button className="grid-c-title-icon">
//                 <img src={iconsImgs.plus} />
//             </button>
//         </div>
//         <div className="grid-c7-content">
//             <div className="progress-bar">
//                 <div className="percent">
//                     <svg>
//                         <circle cx="105" cy="105" r="50"></circle>
//                         {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
//                     </svg>
//                     <div className="number">
//                         <h3>50<span>%</span></h3>
//                     </div>
//                 </div>
//             </div>
//             <ul className="data-list">
//                 <li className="data-item text-silver-v1">
//                     <span className="data-item-text">Savings Target</span>
//                     <span className="data-item-value">$ 500,000</span>
//                 </li>
//                 <li className="data-item text-silver-v1">
//                     <span className="data-item-text">Target Reached</span>
//                     <span className="data-item-value">$ 250,000</span>
//                 </li>
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default Loans





import { iconsImgs } from "../../utils/images";
import "./Loans.css";

const StaffSummary = () => {
  // Example data for HMS maintenance budget tracking
  const maintenanceBudget = 500000;
  const amountSpent = 250000;
  const percent = Math.round((amountSpent / maintenanceBudget) * 100);

  return (
    <div className="subgrid-two-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Maintenance Budget</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c7-content">
        <div className="progress-bar">
          <div className="percent">
            <svg>
              <circle cx="105" cy="105" r="50" className="progress-background"></circle>
              <circle 
                cx="105" 
                cy="105" 
                r="50" 
                className="progress-circle" 
                style={{ strokeDashoffset: 314 - (314 * percent) / 100 }}
              ></circle>
            </svg>
            <div className="number">
              <h3>{percent}<span>%</span></h3>
            </div>
          </div>
        </div>
        <ul className="data-list">
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Budget Target</span>
            <span className="data-item-value">$ {maintenanceBudget.toLocaleString()}</span>
          </li>
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Amount Spent</span>
            <span className="data-item-value">$ {amountSpent.toLocaleString()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaffSummary;
