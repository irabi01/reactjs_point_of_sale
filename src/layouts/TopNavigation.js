import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class TopNavigation extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-100">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">datetime</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">welcome ...</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><mark>email@domain.com</mark></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><FontAwesomeIcon icon="sign-out-alt" /></Link>
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    )
  }
}

export default TopNavigation
