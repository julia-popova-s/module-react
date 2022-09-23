import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { CardItem } from "./CardItem.styled.js";
import { ButtonCircle } from "../../ui/buttonCircle";

import { getFormatNumber } from "../../../utils/getFormatNumber";
import { cutPartOfLine } from "../../../utils/cutPartOfLine.js";
import { addProduct } from "../../../store/reducers/basket";

export function Card({ id, img, name, description, price, weight }) {
  const dispatch = useDispatch();

  const newPrice = getFormatNumber(price);
  const title = cutPartOfLine(name, 51);
  const descriptor = cutPartOfLine(description, 127);
  const margin = name.length > 24 ? true : false;

  let item;
  const handleAddProduct = (e) => {
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
            src={`/images/products/${img}`}
            alt={name}
          />
        </div>
        <div className="card__text">
          <h2 className="card__title">{title}</h2>
          <p className="card__description">{descriptor}</p>
          <div className="card__block-price">
            <div className="card__price">
              {`${newPrice}`} {"/ "}
              <span className="card__weight">{`${weight}.`}</span>
            </div>
            <ButtonCircle
              handle={(e) => handleAddProduct(e)}
              view={"plus"}
              classNames="card__btn"
            />
          </div>
        </div>
      </Link>
    </CardItem>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  weight: PropTypes.string,
};
