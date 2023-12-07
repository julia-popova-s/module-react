import { Link } from 'react-router-dom';
import { FC } from 'react';
import { CartItem } from '../cartItem';
import { CartListWrap } from './cartListListWrap.styled';
import { CartItem as ProductCart } from '../../../customTypes/cartItem';

type CartListProps = {
  products: ProductCart[];
};

export const CartList: FC<CartListProps> = ({ products }) => {
  return (
    <CartListWrap>
      <div className="container">
        <div className="cart-list">
          {products.length === 0 ? (
            <div className="cart-list__alert">
              {'В корзине пока пусто. Загляните на'}
              <Link to={'/'} className="cart-list__link">
                {' главную'}
              </Link>
              {', чтобы выбрать товары'}
            </div>
          ) : (
            products.map((item) => {
              const { id, img, name, price, quantity } = item;
              return (
                <CartItem
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  price={price}
                  quantity={quantity}
                />
              );
            })
          )}
        </div>
      </div>
    </CartListWrap>
  );
};
