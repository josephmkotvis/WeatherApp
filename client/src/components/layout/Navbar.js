import React from 'react'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <div className="slds-context-bar">
      <div className="slds-context-bar__primary">
        <div className="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
          <div className="slds-context-bar__icon-action">
            <button className="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
              <span className="slds-icon-waffle">
                <span className="slds-r1"></span>
                <span className="slds-r2"></span>
                <span className="slds-r3"></span>
                <span className="slds-r4"></span>
                <span className="slds-r5"></span>
                <span className="slds-r6"></span>
                <span className="slds-r7"></span>
                <span className="slds-r8"></span>
                <span className="slds-r9"></span>
              </span>
              <span className="slds-assistive-text">Open App Launcher</span>
            </button>
          </div>
          <span className="slds-context-bar__label-action slds-context-bar__app-name">
            <span className="slds-truncate" title="App Name"> Weather App </span>
          </span>
        </div>
      </div>
      <nav className="slds-context-bar__secondary" role="navigation">
        <ul className="slds-grid">
          <li className="slds-context-bar__item slds-is-active">
            <Link to="/" className="slds-context-bar__label-action" title="Home">
              <span className="slds-assistive-text">Current Page:</span>
              <span className="slds-truncate" title="Home">Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
