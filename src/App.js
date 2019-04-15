import React, { Component } from 'react';
import './App.css';
import './w3.css';

import SideNavigation from './layouts/SideNavigation';


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
