export interface Products {
  id: number;
  title: string;
  price: number;
  image: string;
  description?: string;
}

export interface CartSlice {
  cartItems: CartItem[];
  total: number;
}

export interface CartItem extends Products {
  amount: number;
}