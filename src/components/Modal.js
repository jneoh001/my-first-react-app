import React from 'react'
import './Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal ((
    <div className = "modal-backdrop">
        <div className="modal">
            {children}
            <button onClick={handleClose}>Close</button>  
        </div>
    </div>
  ), )
}
