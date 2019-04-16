import React, { Component } from 'react';
import './App.css';
import './w3.css';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCoffee,
   faHome, 
   faList, 
   faCogs, 
   faChartPie, 
   faChartLine, 
   faThLarge,
   faShoppingCart,
   faTruck,
   faSignOutAlt,
   faBell,
   faQuestionCircle
  } from '@fortawesome/free-solid-svg-icons'

import SideNavigation from './layouts/SideNavigation';


library.add(
  faCoffee, 
  faHome, 
  faList, 
  faCogs, 
  faChartPie, 
  faChartLine, 
  faThLarge, 
  faShoppingCart, 
  faTruck,
  faSignOutAlt,
  faBell,
  faQuestionCircle
  )

class App extends Component {
  render() {
    return (
      <div className="main_container">
        <SideNavigation/>
      </div>
    );
  }
}

export default App;
