export class Produto {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: string;
  selecionado?: boolean;
  precoMin?: number;
  precoMax?: number;
  ratingMin?: number;
}
