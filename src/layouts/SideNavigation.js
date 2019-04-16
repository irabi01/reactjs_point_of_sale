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
import TopNavigation from './TopNavigation';


class SideNavigation extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Sidebar */}
          <div className="w3-sidebar w3-bar-block" style={{"width" : "12%"}}>
            <h3 className="w3-bar-item">Logo</h3>
            <Link to="/" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="home" /> <span>Dashboard</span></Link>
            <Link to="/pos" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="shopping-cart" /> <span>POS</span></Link>
            <Link to="/store" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="th-large" /> <span>Store</span></Link>
            <Link to="/suppliers" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="truck" /> <span>Suppliers</span></Link>
            <Link to="/accounts" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="chart-pie" /> <span>Accounts</span></Link>
            <Link to="/reports" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="chart-line" /> <span>Reports</span></Link>
            <Link to="/settings" className="w3-bar-item w3-button"><FontAwesomeIcon className="icon" icon="cogs" /> <span>Settings</span></Link>
          </div>

          {/* Page Content */}
          <div style={{"marginLeft" : "12%"}}>
              {/* <div className="w3-container w3-teal">
                  <h1>Point of Sale ... v1.0.0</h1>
              </div> */}
              <TopNavigation/>
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
