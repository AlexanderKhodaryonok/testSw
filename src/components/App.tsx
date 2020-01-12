import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/reducers/rootReducer';
import Routs from './routs/Routs';

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routs />
    </BrowserRouter>
  </Provider>
);

export default App;
