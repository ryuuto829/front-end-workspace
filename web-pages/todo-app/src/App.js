import React from 'react';
import TodoApp from './containers/TodoApp/TodoApp';
import TopNavigation from './components/TopNavigation/TopNavigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './containers/Auth/Auth';

/** Example of dummy page */
const testPage = () => (
  <div>
    <h1>This content is private</h1>
  </div>
);

const App = () => (
  <BrowserRouter>
    <div style={{ padding: "20px" }}>
      <TopNavigation />
      <Switch>
        <Route path="/todo" component={TodoApp} />
        <Route path="/test" component={testPage} />
        <Route path="/" exact component={Auth} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;