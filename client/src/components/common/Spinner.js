import React from 'react'

const Spinner = ({ msg, size }) => {
    return (
        <div className="slds-spinner_container">
            <div role="status" className={`slds-spinner slds-spinner_${size}`}>
                <span className="slds-assistive-text">{msg}</span>
                <div className="slds-spinner__dot-a"></div>
                <div className="slds-spinner__dot-b"></div>
            </div>
        </div>
    )
}

export default Spinner
