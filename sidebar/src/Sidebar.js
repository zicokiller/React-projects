import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from './context';


const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useGlobalContext();
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="coding-addict" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((social) => {
          const { id, url, icon } = social;
          return <li key={id}>
            <a href={url}>
              {icon}
            </a>
          </li>
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

// export const sidebarControls = {};

// export default class Sidebar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpened: false
//     }

//     sidebarControls.open = _ => {
//       this.setState({ isOpened: true });
//     };
//   }

//   render() {
//     return (
//       <aside
//         className={`${this.state.isOpened ? "sidebar show-sidebar" : "sidebar"}`}
//       >
//         <div className="sidebar-header">
//           <img src={logo} className="logo" alt="coding-addict" />
//           <button className="close-btn" onClick={() => this.setState({ isOpened: false })}>
//             <FaTimes />
//           </button>
//         </div>
//         <ul className="links">
//           {links.map((link) => {
//             const { id, url, text, icon } = link;
//             return (
//               <li key={id}>
//                 <a href={url}>
//                   {icon}
//                   {text}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//         <ul className="social-icons">
//           {social.map((social) => {
//             const { id, url, icon } = social;
//             return (
//               <li key={id}>
//                 <a href={url}>{icon}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </aside>
//     );
//   }
// }
