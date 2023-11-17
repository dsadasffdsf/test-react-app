export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  sizes: string[];
  color: string[];
  description: string;
  brief: string;
  type: string;
}
export interface ProductsProps {
  products: Product[];
}
export interface ProductProps {
  product: Product;
}

export interface GenProductsReq {
  products: Product[];
  product: Product;
}
export interface AppState {
  products: Product[];
  status: string;
  error: null | string;
}