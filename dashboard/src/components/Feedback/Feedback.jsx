// import { subscriptions } from "../../data/data"
// import { iconsImgs } from "../../utils/images"
// import "./Subscriptions.css";

// const Subscriptions = () => {
//   return (
//     <div className="subgrid-two-item grid-common grid-c5">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Subscriptions</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c5-content">
//             <div className="grid-items">
//                 {
//                     subscriptions.map((subscription) => (
//                         <div className="grid-item" key = {subscription.id}>
//                             <div className="grid-item-l">
//                                 <div className="icon">
//                                     <img src={ iconsImgs.alert } />
//                                 </div>
//                                 <p className="text text-silver-v1">{ subscription.title } <span>due { subscription.due_date }</span></p>
//                             </div>
//                             <div className="grid-item-r">
//                                 <span className="text-silver-v1">$ { subscription.amount }</span>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Subscriptions





import { iconsImgs } from "../../utils/images";
import "./Subscriptions.css";

// Sample data for HMS recurring subscriptions
const subscriptions = [
  { id: 1, title: "Laundry Service", due_date: "2025-06-05", amount: 150 },
  { id: 2, title: "Internet Service", due_date: "2025-06-10", amount: 100 },
  { id: 3, title: "Security System", due_date: "2025-06-15", amount: 200 },
  { id: 4, title: "Cleaning Supplies", due_date: "2025-06-20", amount: 75 },
];

const Feedback = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Vendor Subscriptions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((subscription) => (
            <div className="grid-item" key={subscription.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} alt="Alert" />
                </div>
                <p className="text text-silver-v1">
                  {subscription.title} <span>due {subscription.due_date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">$ {subscription.amount.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
