import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    console.log(linksRef)
        const linksHeight = linksRef.current.getBoundingClientRect().height;
         if (showLinks) {
          linksContainerRef.current.style.height = `${linksHeight}px`;
       } else {
          linksContainerRef.current.style.height = '0px';
         }
      }, [showLinks]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => toggleLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        
          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// Component version

// import React, { Component, createRef } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { links, social } from './data';
// import logo from './logo.svg';

// export default class Navbar extends Component {
//   constructor(props) {
//     super(props);
    
//     this.state = {
//       showLinks: false,
//     }
//     this.linksRef = createRef();
//     this.linksContainerRef = createRef();
//   }

//   toggleLinks() {
//     this.setState({showLinks: !this.state.showLinks});
//   }

//   componentDidUpdate() {
//     console.log(this.linksRef)
//     const linksHeight = this.linksRef.current.getBoundingClientRect().height;
//       if(this.state.showLinks) {
//         this.linksContainerRef.current.style.height = `${linksHeight}px`; 
//       } else {
//         this.linksContainerRef.current.style.height = '0px';
//       }
//   };
  
//   render() {
//     return (
//       <nav>
//         <div className="nav-center">
//           <div className="nav-header">
//             <img src={logo} alt="logo" />
//             <button
//               className="nav-toggle"
//               onClick={() => this.toggleLinks()}
//             >
//               <FaBars />
//             </button>
//           </div>
//           <div className="links-container" ref={this.linksContainerRef}>
//               <ul className="links" ref={this.linksRef}>
//                 {links.map((link) => {
//                   const { id, url, text } = link;
//                   return (
//                     <li key={id}>
//                       <a href={url}>{text}</a>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
  
//           <ul className="social-icons">
//             {social.map((social) => {
//               const { id, url, icon } = social;
//               return (
//                 <li key={id}>
//                   <a href={url}>{icon}</a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </nav>
//     );
//   }
// };

