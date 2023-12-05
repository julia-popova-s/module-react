import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { CardItem } from './CardItem.styled.js';
import { ButtonCircle } from '../../ui/buttonCircle/index.js';

import { getFormatNumber } from '../../../utils/getFormatNumber.js';
import { cutPartOfLine } from '../../../utils/cutPartOfLine.js';
import { addProduct } from '../../../store/reducers/basket.js';
import { FC } from 'react';

type CardProps = {
  id: string;
  img: string;
  name: string;
  description: string;
  price: string;
  weight: string;
};

export const Card: FC<CardProps> = ({ id, img, name, description, price, weight }) => {
  const dispatch = useDispatch();

  const newPrice = getFormatNumber(price);
  const title = cutPartOfLine(name, 51);
  const descriptor = cutPartOfLine(description, 127);
  const margin = name.length > 24 ? true : false;

  let item;
  const handleAddProduct = (e: Event): void => {
    e.preventDefault();
    item = { id, img, name, price };
    dispatch(addProduct(item));
  };

  return (
    <CardItem 
    // margin={margin}
    >
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
              <span className="card__weight">{`${weight}.`}</span>
            </div>
            <ButtonCircle
              handle={(e: Event) => handleAddProduct(e)}
              view={'plus'}
              classNames="card__btn"
            />
          </div>
        </div>
      </Link>
    </CardItem>
  );
};