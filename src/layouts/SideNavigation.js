import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Dashboard from '../pages/Dashboard';
import Pos from '../pages/Pos'
import Store from '../pages/Store'
import Suppliers from '../pages/Suppliers'
import Accounts from '../pages/Accounts'
import Reports from '../pages/Reports'
import Setting from '../pages/Setting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class SideNavigation extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Sidebar */}
          <div className="w3-sidebar w3-light-grey w3-bar-block" style={{"width" : "20%"}}>
          <h3 className="w3-bar-item">Logo</h3>
          <Link to="/" className="w3-bar-item w3-button"><FontAwesomeIcon icon="home" /> Dashboard</Link>
          <Link to="/pos" className="w3-bar-item w3-button"><FontAwesomeIcon icon="shopping-cart" /> POS</Link>
          <Link to="/store" className="w3-bar-item w3-button"><FontAwesomeIcon icon="th-large" /> Store</Link>
          <Link to="/suppliers" className="w3-bar-item w3-button"><FontAwesomeIcon icon="home" /> Suppliers</Link>
          <Link to="/accounts" className="w3-bar-item w3-button"><FontAwesomeIcon icon="chart-pie" /> Accounts</Link>
          <Link to="/reports" className="w3-bar-item w3-button"><FontAwesomeIcon icon="chart-line" /> Reports</Link>
          <Link to="/settings" className="w3-bar-item w3-button"><FontAwesomeIcon icon="cogs" /> Settings</Link>
          </div>

          {/* Page Content */}
          <div style={{"marginLeft" : "20%"}}>
              <div className="w3-container w3-teal">
                  <h1>Point of Sale ... v1.0.0</h1>
              </div>
              <div className="w3-container">
                  <Switch>
                    <Route path = "/" exact component = {Dashboard}/>
                    <Route path = "/pos" component = {Pos}/>
                    <Route path = "/store" component = {Store}/>
                    <Route path = "/suppliers" component = {Suppliers}/>
                    <Route path = "/accounts" component = {Accounts}/>
                    <Route path = "/reports" component = {Reports}/>
                    <Route path = "/settings" component = {Setting}/>
                  </Switch>
              </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default SideNavigation
