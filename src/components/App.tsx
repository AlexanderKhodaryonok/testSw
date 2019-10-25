import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routs from '../routs/Routs';

const App: React.FC = () => (
  <BrowserRouter>
    <Routs />
  </BrowserRouter>
);

export default App;
