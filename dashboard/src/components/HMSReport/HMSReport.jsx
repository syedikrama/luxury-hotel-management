// import { iconsImgs } from "../../utils/images";
// import "./Report.css";
// import { reportData } from "../../data/data";

// const Report = () => {
//   return (
//     <div className="grid-one-item grid-common grid-c3">
//         <div className="grid-c-title">
//             <h3 className="grid-c-title-text">Report</h3>
//             <button className="grid-c-title-icon">
//                 <img src={ iconsImgs.plus } />
//             </button>
//         </div>
//         <div className="grid-c3-content">
//             <div className="grid-chart">
//                 <div className="chart-vert-value">
//                     <span>100</span>
//                     <span>75</span>
//                     <span>50</span>
//                     <span>25</span>
//                     <span>0</span>
//                 </div>
//                 {
//                     reportData.map((report) => (
//                         <div className="grid-chart-bar" key={report.id}>
//                             <div className="bar-wrapper">
//                                 <div className="bar-item1" style={{ height: `${report.value1 !== null ? "40%" : ""}` }}></div>
//                                 <div className="bar-item2" style={{ height: `${report.value2 !== null ? "60%" : ""}` }}></div>
//                             </div>
//                             <span className="grid-hortz-value">Jan</span>
//                         </div>
//                     ))
//                 }
                
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Report



import { iconsImgs } from "../../utils/images";
import "./Report.css";

// Example monthly data for HMS (can be fetched from backend)
const monthlyBookingReport = [
  { id: 1, month: "Jan", bookings: 40, revenue: 12000 },
  { id: 2, month: "Feb", bookings: 55, revenue: 15000 },
  { id: 3, month: "Mar", bookings: 60, revenue: 18000 },
  { id: 4, month: "Apr", bookings: 70, revenue: 21000 },
  { id: 5, month: "May", bookings: 65, revenue: 19500 },
];

const HMSReport = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Monthly Booking Report</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Add" />
        </button>
      </div>
      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {monthlyBookingReport.map((report) => (
            <div className="grid-chart-bar" key={report.id}>
              <div className="bar-wrapper">
                {/* Bookings bar */}
                <div
                  className="bar-item1"
                  style={{ height: `${(report.bookings / 100) * 100}%` }}
                  title={`Bookings: ${report.bookings}`}
                ></div>

                {/* Revenue bar */}
                <div
                  className="bar-item2"
                  style={{ height: `${(report.revenue / 21000) * 100}%` }}
                  title={`Revenue: $${report.revenue}`}
                ></div>
              </div>
              <span className="grid-hortz-value">{report.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HMSReport;
