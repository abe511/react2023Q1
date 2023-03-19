import '../styles/App.css';

import { Item } from 'interfaces/SearchBar';
import { CardProps } from 'interfaces/CardProps';
import SearchBar from './SearchBar';
import CardList from './CardList';
import Card from './Card';

import ava from '../assets/images/ava.jpg';

// interface Item {
//   id: number;
//   name: string;
// }

function App() {
  const items: Item[] = [
    { id: 123, name: 'Book' },
    { id: 23123, name: 'Booklet' },
    { id: 6723, name: 'Stream' },
    { id: 5676, name: 'Housing' },
    { id: 345, name: 'Wall' },
    { id: 5465, name: 'Sidewalk' },
    { id: 134223, name: 'Street' },
    { id: 456, name: 'House' },
  ];

  const cards: CardProps[] = [
    {
      id: 12123,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 12123,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 12123,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
    {
      id: 12123,
      image: ava,
      title: 'Some Title',
      caption: 'Some sample caption',
      likes: 12,
      views: 123,
      saved: false,
      tags: ['some', 'sample', 'tags'],
    },
  ];

  return (
    <div className="App">
      <SearchBar items={items} />

      <CardList cards={cards} />

      <Card
        // id={123}
        // image="./assets/images/ava.jpg"
        image={ava}
        title="The Sample Card"
        caption="Some sample description"
        likes={5}
        views={15}
        saved={false}
        tags={['sample', 'first', 'card']}
      />
    </div>
  );
}

export default App;
