import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItemWrap } from './CartItemWrap.styled';
import { getFormatNumber } from '../../../utils/getFormatNumber';
import { cutPartOfLine } from '../../../utils/cutPartOfLine';
import { removeProduct, minusProduct, plusProduct } from '../../../store/reducers/cart';
import { ButtonCircle } from '../../ui/buttonCircle';
import { FC } from 'react';

import { CartItem as CartItemProps } from '../../../customTypes/cartItem';

export const CartItem: FC<CartItemProps> = ({ id, img, name, price, quantity }) => {
  const newPrice = getFormatNumber(price * quantity);
  const title = cutPartOfLine(name, 47);

  const dispatch = useDispatch();
  let item = { id };

  const handleDeleteProduct = () => {
    dispatch(removeProduct(item));
  };
  const handlePlusProduct = () => {
    dispatch(plusProduct(item));
  };
  const handleMinusProduct = () => {
    dispatch(minusProduct({ id, quantity }));
  };

  return (
    <CartItemWrap>
      <Link to={`/${id}/${name}`} className="card__link">
        <div className="card__preview">
          <img
            className="card__img"
            src={`${process.env.PUBLIC_URL}/images/cart/${img}`}
            alt={name}
          />
        </div>
      </Link>

      <div className="card__text">
        <Link to={`/${id}/${name}`} className="card__link">
          {title}
        </Link>

        <div className="card__block-price">
          <ButtonCircle
            handleСlick={handlePlusProduct}
            view={'plus'}
            classNames={'card__btn_color'}
          />
          <span className="card__quantity"> {`${quantity} шт.`}</span>
          <ButtonCircle
            handleСlick={handleMinusProduct}
            view={'minus'}
            classNames={'card__btn_color'}
          />
          <span className="card__price">{newPrice}</span>
          <ButtonCircle
            handleСlick={handleDeleteProduct}
            view={'delete'}
            classNames={'card__btn_color'}
          />
        </div>
      </div>
    </CartItemWrap>
  );
};
