export interface Products{
  id: number;
  name: string;
  category: string
  description: string;
  price: number;
  quantity: number;
  image: number;
}

export interface ServerResponse{
  count: number;
  products: Products[];
}
