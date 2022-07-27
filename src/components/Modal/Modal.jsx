import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

const Modal = ({ onCloseModal, src }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEsc);
    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  });

  const onEsc = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  return (
    <div className={css.Overlay} onClick={() => onCloseModal()}>
      <div className={css.Modal}>
        <img src={src} alt="largeImg" />
        <button className={css.BtnModalClose} onClick={onCloseModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
Modal.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEsc);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEsc);
//   }

//   onEsc = e => {
//     if (e.code === 'Escape') this.props.onCloseModal();
//   };
//   overlayHidden = () => {
//     this.props.onCloseModal();
//   };
//   static propTypes = {
//     onCloseModal: PropTypes.func.isRequired,
//     src: PropTypes.string.isRequired,
//   };
//   render() {
//     return (
//       <div className={css.Overlay} onClick={this.overlayHidden}>
//         <div className={css.Modal}>
//           <img src={this.props.src} alt="" />
//           <button
//             className={css.BtnModalClose}
//             onClick={this.props.toggleModal}
//           >
//             X
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
