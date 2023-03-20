import { Component } from 'react';
import '../styles/Card.css';

interface CardProps {
  // id: number;
  image: string;
  title: string;
  caption: string;
  likes: number;
  views: number;
  saved: boolean;
  tags: string[];
}

interface CardState {
  saved: boolean;
}

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      saved: props.saved,
    };

    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleSaveClick() {
    this.setState((prevState) => ({ saved: !prevState.saved }));
  }

  render() {
    const { image, title, caption, likes, views, tags } = this.props;
    const { saved } = this.state;

    return (
      <div className="card">
        <img className="card-image" src={image} alt={image} />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-caption">{caption}</p>
          <div className="class-meta">
            <div className="class-likes">{likes} likes</div>
            <div className="class-views">{views} views</div>
            <button
              type="button"
              className={`class-save ${saved ? 'saved' : ''}`}
              onClick={this.handleSaveClick}
            >
              {saved ? 'Saved' : 'Save'}
            </button>
          </div>
          <div className="class-tags">
            {tags.map((tag) => (
              <span key={tag} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
