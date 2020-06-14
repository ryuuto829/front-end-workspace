import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Auth from './pages/auth/Auth';

const App = () => (
  <BrowserRouter>
    <Auth />
  </BrowserRouter>
);

export default App;
