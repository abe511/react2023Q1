/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import CardList from '../components/CardList';

import cards from '../DB';

class Home extends Component {
  render() {
    return (
      <>
        <h1>Main Page</h1>
        <CardList cards={cards} />
      </>
    );
  }
}

export default Home;
