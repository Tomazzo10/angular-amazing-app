export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  price: {
    amount: number;
    currency: string;
  };
  favorited: boolean;
}
