import { Component } from 'react';
import Card from './Card';

interface CardData {
  id: number;
  image: string;
  title: string;
  caption: string;
  likes: number;
  views: number;
  // saved: boolean;
  tags: string[];
}

interface CardListProps {
  cards: CardData[];
}

class CardList extends Component<CardListProps> {
  constructor(props: CardListProps) {
    super(props);
    this.handleCardSave = this.handleCardSave.bind(this);
  }

  handleCardSave(id: number) {
    // handle card save logic here
  }

  render() {
    const { cards } = this.props;

    return (
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            // id={card.id}
            image={card.image}
            title={card.title}
            caption={card.caption}
            likes={card.likes}
            views={card.views}
            // onSave={this.handleCardSave}
            saved={false}
            tags={card.tags}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
