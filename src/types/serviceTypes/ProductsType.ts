type RatingTypes = {
  rate: number;
  count: number;
};

export interface ProductType {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: RatingTypes;
}
