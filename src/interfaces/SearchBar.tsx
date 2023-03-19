export interface Item {
  id: number;
  name: string;
}

export interface Props {
  items: Item[];
}

export interface State {
  searchText: string;
  items: Item[];
  filteredItems: Item[];
}
