import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from './context';


const Home = () => {
  const { openSideBar, openModal } = useGlobalContext();
  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>show modal</button>
    </main>
  );
};

export default Home;

// import { sidebarControls } from "./Sidebar";
// import { modalControls } from "./Modal";

// export default class Home extends React.Component {
//   render() {
//     const {openSideBar, openModal} = this.context;
//   return (
//     <main>
//       <button className="sidebar-toggle" onClick={() => sidebarControls.open()}>
//         <FaBars />
//       </button>
//       <button className="btn" onClick={() => modalControls.open("hello")}>show modal</button>
//     </main>
//   );
//   }
// }
