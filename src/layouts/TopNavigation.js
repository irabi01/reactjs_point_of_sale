import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Clock from 'react-live-clock'

class TopNavigation extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <div className="bell_help">
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><FontAwesomeIcon className="icon" icon="bell" /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><FontAwesomeIcon className="icon" icon="question-circle" /></Link>
                            </li>
                        </div>
                    </ul>
                    <ul className="navbar-nav">
                        <div className="time_format">
                            <li className="nav-item">
                                <Clock format={'HH:mm:ss A'} ticking={true} />
                            </li>
                            {/* <hr/> */}
                            <li className="nav-item">
                                <Clock format={'dddd, MMMM Mo, YYYY'} ticking={true} />
                            </li>
                        </div>
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
