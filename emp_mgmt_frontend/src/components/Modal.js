import React from 'react';
import ReactDOM from 'react-dom';

// Modal component rendered through React Portal
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null; // Don't render anything if the modal is not open
  }

  // Modal styles for demo purposes
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    zIndex: 1000,
  };

  const overlayStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  };

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyles} onClick={onClose}></div>
      <div style={modalStyles}>
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('modal-root') // Render modal in the modal-root div
  );
}

export default Modal;
