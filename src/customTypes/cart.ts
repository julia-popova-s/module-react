import { CartItem } from './cartItem';

export interface Cart {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}
