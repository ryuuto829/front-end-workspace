import React from 'react';

import './App.css';
import SideNavigation from './containers/SideNavigation';
import Tasks from './containers/Tasks';

function App() {
  return (
    <div className="container">
      <SideNavigation />
      <Tasks />
    </div>
  );
}

export default App;
