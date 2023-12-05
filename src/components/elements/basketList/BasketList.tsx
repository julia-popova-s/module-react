import { Link } from 'react-router-dom';
import { FC } from 'react';
import { CardBasket } from '../cardBasket';
import { BasketListWrap } from './BasketListWrap.styled';

type Product = {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
};

type BasketListProps = {
  products: Product[];
};

export const BasketList: FC<BasketListProps> = ({ products }) => {
  return (
    <BasketListWrap>
      <div className="container">
        <div className="basket-list">
          {products.length === 0 ? (
            <div className="basket-list__alert">
              {'В корзине пока пусто. Загляните на'}
              <Link to={'/'} className="basket-list__link">
                {' главную'}
              </Link>
              {', чтобы выбрать товары'}
            </div>
          ) : (
            products.map((item) => {
              const { id, img, name, price, quantity } = item;
              return (
                <CardBasket
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
    </BasketListWrap>
  );
};
