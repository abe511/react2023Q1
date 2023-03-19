/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return (
      <>
        <Link to="/">To Main Page</Link>
        <h1>Not Found</h1>
      </>
    );
  }
}

export default NotFound;
