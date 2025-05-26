// import { useEffect, useState } from 'react';
// import { personsImgs } from '../../utils/images';
// import { navigationLinks } from '../../data/data';
// import "./Sidebar.css";
// import { useContext } from 'react';
// import { SidebarContext } from '../../context/sidebarContext';

// const Sidebar = () => {
//   const [activeLinkIdx] = useState(1);
//   const [sidebarClass, setSidebarClass] = useState("");
//   const { isSidebarOpen } = useContext(SidebarContext);
//   const tokenName = localStorage.getItem('name');
//   useEffect(() => {
//     if(isSidebarOpen){
//       setSidebarClass('sidebar-change');
//     } else {
//       setSidebarClass('');
//     }
//   }, [isSidebarOpen]);

//   return (
//     <div className={ `sidebar ${sidebarClass}` }>
//       <div className="user-info">
//           <div className="info-img img-fit-cover">
//               <img src={ personsImgs.person_two } alt="profile image" />
//           </div>
//           <span className="info-name">{tokenName}</span>
//       </div>

//       <nav className="navigation">
//           <ul className="nav-list">
//             {
//               navigationLinks.map((navigationLink) => (
//                 <li className="nav-item" key = { navigationLink.id }>
//                   <a href="#" className={ `nav-link ${ navigationLink.id === activeLinkIdx ? 'active' : null }` }>
//                       <img src={ navigationLink.image } className="nav-link-icon" alt = { navigationLink.title } />
//                       <span className="nav-link-text">{ navigationLink.title }</span>
//                   </a>
//                 </li>
//               ))
//             }
//           </ul>
//       </nav>
//     </div>
//   )
// }

// export default Sidebar







import { useEffect, useState, useContext } from 'react';
import { personsImgs } from '../../utils/images';
import "./Sidebar.css";
import { SidebarContext } from '../../context/sidebarContext';

const hmsNavigationLinks = [
  { id: 1, title: "Dashboard", image: "/icons/dashboard.svg", path: "/dashboard" },
  { id: 2, title: "Bookings", image: "/icons/bookings.svg", path: "/bookings" },
  { id: 3, title: "Guests", image: "/icons/guests.svg", path: "/guests" },
  { id: 4, title: "Staff", image: "/icons/staff.svg", path: "/staff" },
  { id: 5, title: "Rooms", image: "/icons/rooms.svg", path: "/rooms" },
  { id: 6, title: "Reports", image: "/icons/reports.svg", path: "/reports" },
  { id: 7, title: "Settings", image: "/icons/settings.svg", path: "/settings" },
  { id: 8, title: "Logout", image: "/icons/logout.svg", path: "/logout" },
];

const Sidebar = () => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const tokenName = localStorage.getItem('name');

  useEffect(() => {
    setSidebarClass(isSidebarOpen ? 'sidebar-change' : '');
  }, [isSidebarOpen]);

  const handleLinkClick = (id) => {
    setActiveLinkIdx(id);
  };

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile" />
        </div>
        <span className="info-name">{tokenName || "Admin"}</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {hmsNavigationLinks.map((link) => (
            <li className="nav-item" key={link.id}>
              <a
                href={link.path}
                className={`nav-link ${link.id === activeLinkIdx ? 'active' : ''}`}
                onClick={() => handleLinkClick(link.id)}
              >
                <img src={link.image} className="nav-link-icon" alt={link.title} />
                <span className="nav-link-text">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
