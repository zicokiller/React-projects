import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from './context';

const Modal = () => {
  const { isModalOpen, closeModal} = useGlobalContext();

  return (
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

// export const modalControls = {};

// export default class Modal extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isOpened: false, currentString: "" };

  
//   modalControls.open = str => {
//     this.setState({isOpened: false});
//     this.setState({currentString: str});
//     this.setState({isOpened: true});
//   }
//   modalControls.close = () => {
//     this.isOpened = false;
//   }
// }
  
//   render() {
//     return (
//     <div className={`${this.state.isOpened ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
//       <div className="modal-container">
//         <h3>{this.state.currentString}</h3>
//         <button className="close-modal-btn" onClick={() => this.setState({isOpened: false})}>
//           <FaTimes />
//         </button>
//       </div>
//     </div>
//   );
//   }
// };
