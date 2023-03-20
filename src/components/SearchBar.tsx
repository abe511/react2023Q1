import { Component, ChangeEvent } from 'react';
import { Item, Props, State } from 'interfaces/SearchBar';

class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: '',
      items: props.items,
      filteredItems: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    const text = localStorage.getItem('searchText') || '';
    this.setState({ searchText: text });
  }

  componentDidUpdate(_: Props, prevState: State) {
    const { searchText } = this.state;
    if (searchText !== prevState.searchText) {
      localStorage.setItem('searchText', searchText);
    }
  }

  handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
    const searchText = e.target.value;
    const { items } = this.state;
    const filteredItems = items.filter((item: Item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    this.setState({ searchText, filteredItems });
  }

  render() {
    const { filteredItems, searchText } = this.state;

    return (
      <div>
        <input
          type="text"
          value={searchText}
          onChange={this.handleSearchChange}
          placeholder="Start typing..."
        />
        <ul>
          {filteredItems.map((item: Item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
