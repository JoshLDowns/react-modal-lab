import React from 'react'

function Modal (props) {
    return (
        <div id='modal'>
            <h1>Hello! I am a Modal</h1>
            <button id='close-button' onClick={props.toggle}>Close Modal</button>
        </div>
    )
}

export default Modal