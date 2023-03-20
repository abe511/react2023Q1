export interface CardProps {
  id: number;
  image: string;
  title: string;
  caption: string;
  likes: number;
  views: number;
  saved: boolean;
  tags: string[];
}
