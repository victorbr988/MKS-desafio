export interface ProductsTypes {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProductsState {
  data: ProductsTypes[];
  loading: boolean;
  cartProducts: ProductsTypes[];
  totalPrice: number;
}