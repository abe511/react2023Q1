import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import { Item } from 'interfaces/SearchBar';
import NotFound from '../views/NotFound';
import SearchBar from './SearchBar';
import Home from '../views/Home';

class App extends Component {
  items: Item[] = [
    { id: 123, name: 'Book' },
    { id: 23123, name: 'Booklet' },
    { id: 6723, name: 'Stream' },
    { id: 5676, name: 'Housing' },
    { id: 345, name: 'Wall' },
    { id: 5465, name: 'Sidewalk' },
    { id: 134223, name: 'Street' },
    { id: 456, name: 'House' },
  ];

  render() {
    return (
      <>
        <SearchBar items={this.items} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    );
  }
}

export default App;
