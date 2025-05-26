// import "./ContentMain.css";
// import Cards from "../Cards/Cards";
// import Transactions from "../Transactions/Transactions";
// import Report from "../Report/Report";
// import Budget from "../Budget/Budget";
// import Subscriptions from "../Subscriptions/Subscriptions";
// import Savings from "../Savings/Savings";
// import Loans from "../Loans/Loans";
// import Financial from "../Financial/Financial";

// const ContentMain = () => {
//   return (
//     <div className="main-content-holder">
//         <div className="content-grid-one">
//             <Cards />
//             <Transactions />
//             <Report />
//         </div>
//         <div className="content-grid-two">
//             <Budget />
//             <div className="grid-two-item">
//               <div className="subgrid-two">
//                 <Subscriptions />
//                 <Savings />
//               </div>
//             </div>

//             <div className="grid-two-item">
//               <div className="subgrid-two">
//                 <Loans />
//                 <Financial />
//               </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ContentMain




import "./ContentMain.css";
import RoomCards from "../RoomCards/RoomCards"; // Replaces Cards
import Reservations from "../Reservations/Reservations"; // Replaces Transactions
import HMSReport from "../HMSReport/HMSReport"; // Replaces Report
import BookingTrends from "../BookingTrends/BookingTrends"; // Replaces Budget
import Feedback from "../Feedback/Feedback"; // Replaces Subscriptions
import Maintenance from "../Maintenance/Maintenance"; // Replaces Savings
import StaffSummary from "../StaffSummary/StaffSummary"; // Replaces Loans
import CheckinCheckout from "../CheckinCheckout/CheckinCheckout"; // Replaces Financial
import DashboardExtra from '../DashboardExtra';


const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <RoomCards />
        <Reservations />
        <HMSReport />
      </div>

      <div className="content-grid-two">
        <BookingTrends />

        <div className="grid-two-item">
          <div className="subgrid-two">
            <Feedback />
            <Maintenance />
          </div>
        </div>


{/* <div className="grid-two-item">
          <div className="subgrid-two">
        <DashboardExtra />
            
          </div>
        </div> */}


        <div className="grid-two-item">
          <div className="subgrid-two">
            <StaffSummary />
            <CheckinCheckout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
