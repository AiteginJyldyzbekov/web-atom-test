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
  rating?: RatingTypes;
}

export interface UseProductProps {
  id: number;
}

export interface CreateProductType {
  // id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
