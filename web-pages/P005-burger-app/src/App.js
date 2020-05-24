import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Blog from './containers/Blog/Blog';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

function App() {

  // Burger App
  const app1 = <BurgerBuilder />;

  // Http Ajax App
  const app2 = <Blog />;

  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/orders" component={Orders} />
        <Route path="/" exact component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;