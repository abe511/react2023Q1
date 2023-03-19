/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';
import { CardProps } from 'interfaces/CardProps';
import CardList from '../components/CardList';

import ava from '../assets/images/ava.jpg';

class Home extends Component {
  cards: CardProps[] = [
    {
      id: 1212356,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 1212323,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 1337,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 1212324,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
  ];

  render() {
    return (
      <>
        <h1>Main Page</h1>
        <CardList cards={this.cards} />
      </>
    );
  }
}

export default Home;
