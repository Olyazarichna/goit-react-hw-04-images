import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = e => {
    if (e.code === 'Escape') this.props.onCloseModal();
  };
  overlayHidden = () => {
    this.props.onCloseModal();
  };
  static propTypes = {
    onCloseModal: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
  };
  render() {
    return (
      <div className={css.Overlay} onClick={this.overlayHidden}>
        <div className={css.Modal}>
          <img src={this.props.src} alt="" />
          <button
            className={css.BtnModalClose}
            onClick={this.props.toggleModal}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;
