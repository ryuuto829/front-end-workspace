import React from 'react';
import './App.css';
import SideNavigation from './containers/SideNavigation';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="container">
      <SideNavigation />
      <TodoApp />
    </div>
  );
}

export default App;
