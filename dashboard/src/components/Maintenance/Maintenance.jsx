// import { savings } from "../../data/data";
// import { iconsImgs, personsImgs } from "../../utils/images";
// import "./Savings.css";

// const Savings = () => {
//   return (
//     <div className="subgrid-two-item grid-common grid-c6">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Savings</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c6-content">
//             <div className="grid-items">
//                 {
//                     savings.map((saving) => (
//                         <div className="grid-item" key = { saving.id }>
//                             <div className="grid-item-top">
//                                 <div className="grid-item-top-l">
//                                     <div className="avatar img-fit-cover">
//                                         <img src={ personsImgs.person_one } />
//                                     </div>
//                                     <p className="text text-silver-v1">{ saving.title }</p>
//                                 </div>
//                                 <div className="grid-item-top-r">
//                                     <span className="text-silver-v1">$ { saving.saving_amount }</span>
//                                 </div>
//                             </div>
//                             <div className="grid-item-bottom">
//                                 <div className="grid-item-badges">
//                                     <span className="grid-item-badge">Date taken { saving.date_taken }</span>
//                                     <span className="grid-item-badge">Amount left $ { saving.amount_left }</span>
//                                 </div>
//                                 <div className="grid-item-progress">
//                                     <div className="grid-item-fill"></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Savings







import { iconsImgs, personsImgs } from "../../utils/images";
import "./Savings.css";

// Sample HMS data for guest deposits or advance payments
const savings = [
  {
    id: 1,
    title: "John Doe",
    saving_amount: 500,
    date_taken: "2025-05-15",
    amount_left: 200,
  },
  {
    id: 2,
    title: "Jane Smith",
    saving_amount: 750,
    date_taken: "2025-05-10",
    amount_left: 0,
  },
  {
    id: 3,
    title: "Mark Johnson",
    saving_amount: 300,
    date_taken: "2025-05-18",
    amount_left: 150,
  },
];

const Maintenance = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Guest Deposits</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((saving) => (
            <div className="grid-item" key={saving.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={personsImgs.person_one} alt={saving.title} />
                  </div>
                  <p className="text text-silver-v1">{saving.title}</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-silver-v1">
                    $ {saving.saving_amount.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">Date taken: {saving.date_taken}</span>
                  <span className="grid-item-badge">
                    Amount left: $ {saving.amount_left.toFixed(2)}
                  </span>
                </div>
                <div className="grid-item-progress">
                  {/* Progress bar fill based on amount left */}
                  <div
                    className="grid-item-fill"
                    style={{
                      width: `${((saving.saving_amount - saving.amount_left) / saving.saving_amount) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
