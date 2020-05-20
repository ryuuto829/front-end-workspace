import React from 'react';
import './App.css';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Blog from './containers/Blog/Blog';

function App() {

  // Burger App
  const app1 = <BurgerBuilder />;

  // Http Ajax App
  const app2 = <Blog />;

  return (
    <Layout>
      {app1}
    </Layout>
  );
}

export default App;