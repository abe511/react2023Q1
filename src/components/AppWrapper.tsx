/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import App from './App';

class AppWrapper extends Component {
  render() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    );
  }
}

export default AppWrapper;
