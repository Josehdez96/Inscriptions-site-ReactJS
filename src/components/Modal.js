import React from "react"
import ReactDOM from "react-dom"

import "./styles/Modal.css"

//al usar {props.childen} trae el contenido que se le agregue al <Modal>childen</Modal>, a esto se le llama composición (crear componentes genericos para luego crear uno nuevo especializado)

function Modal (props) {
  if (!props.isOpen) {
    return null
  }
  return  ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__container">
          <button onClick={props.onClose} className="Modal__close-button">
            X
          </button>
          
          {props.children} 
        </div> 
      </div>, 
      document.getElementById("modal")
      )
  
}

export default Modal;