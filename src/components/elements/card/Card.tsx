import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CardItem } from './CardItem.styled';
import { ButtonCircle } from '../../ui/buttonCircle/index';

import { getFormatNumber } from '../../../utils/getFormatNumber';
import { cutPartOfLine } from '../../../utils/cutPartOfLine';
import { addProduct } from '../../../store/reducers/basket';
import { FC } from 'react';
import { Product } from '../../../customTypes/product';

export const Card: FC<Product> = ({ id, img, name, description, price, weight, units }) => {
  const dispatch = useDispatch();

  const newPrice = getFormatNumber(price);
  const title = cutPartOfLine(name, 51);
  const descriptor = cutPartOfLine(description, 127);
  const margin = name.length > 24 ? true : false;

  let item;
  const handleAddProduct = (e: any) => {
    e.preventDefault();
    item = { id, img, name, price };
    dispatch(addProduct(item));
  };

  return (
    <CardItem margin={margin}>
      <Link to={`/${id}/${name}`} className="card__link">
        <div className="card__preview">
          <img
            className="card__img"
            src={`${process.env.PUBLIC_URL}/images/products/${img}`}
            alt={name}
          />
        </div>
        <div className="card__text">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{descriptor}</p>
          <div className="card__block-price">
            <div className="card__price">
              {`${newPrice}`} {'/ '}
              <span className="card__weight">{`${weight} ${units}.`}</span>
            </div>
            <ButtonCircle handleСlick={handleAddProduct} view={'plus'} classNames="card__btn" />
          </div>
        </div>
      </Link>
    </CardItem>
  );
};
