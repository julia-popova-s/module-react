import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ButtonOrder } from '../../ui/buttonOrder';
import { ProductWrap } from './ProductWrap.styled';
import { addProduct } from '../../../store/reducers/cart';
import { getFormatNumber } from '../../../utils/getFormatNumber';
import { FC } from 'react';

import { Product as ProductProps } from '../../../customTypes/product';

export const Product: FC<ProductProps> = ({ id, img, name, description, price, weight, units }) => {
  const dispatch = useDispatch();

  const newPrice = getFormatNumber(price);

  let item: {
    id: string;
    img: string;
    name: string;
    price: number;
  };

  const handleAddProduct = () => {
    item = { id, img, name, price };
    dispatch(addProduct(item));
  };

  return (
    <ProductWrap>
      <div className="container">
        <div className="product">
          <div className="product__view">
            <img
              className="product__img"
              src={`${process.env.PUBLIC_URL}/images/products/${img}`}
              alt={name}
            />
          </div>
          <div className="product__text">
            <div className="product__title">{name}</div>
            <div className="product__description">{description}</div>
            <div className="product__block-price">
              <div className="product__price">
                {newPrice} {'/ '}
                <span className="product__weight">{`${weight} ${units}.`}</span>
              </div>
              <Link to={'/cart'}>
                <ButtonOrder
                  name={'В корзину'}
                  type={'button'}
                  handleClick={handleAddProduct}
                  view={'order'}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProductWrap>
  );
};
