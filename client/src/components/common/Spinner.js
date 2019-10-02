import React from 'react'

const Spinner = ({ msg, size }) => {
    return (
        <div className="slds-align_absolute-center">
            <div role="status" className={`slds-spinner slds-spinner_${size} slds-spinner_inline"`}>
                <span className="slds-assistive-text">{msg}</span>
                <div className="slds-spinner__dot-a"></div>
                <div className="slds-spinner__dot-b"></div>
            </div>
        </div>
    )
}

export default Spinner
