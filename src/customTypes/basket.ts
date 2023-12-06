import { BasketItem } from './basketItem';

export type Basket = {
  basket: BasketItem[];
  totalAmount: number;
  totalQuantity: number;
};
