import { CardItem } from "./CardItem.styled.js";
import getPriceWithSpace from "../../utils/getPriceWithSpace.js";
import cutPartOfLine from "../../utils/cutPartOfLine.js";
import PropTypes from "prop-types";

function Card({ img, name, description, price, weight }) {
  const newPrice = getPriceWithSpace(price);
  const title = cutPartOfLine(name, 51);
  const descriptor = cutPartOfLine(description, 127);
  const margin = name.length > 24 ? true : false;
  return (
    <CardItem margin={margin}>
      <div className="card__preview">
        <img
          className="card__img"
          src={`/images/products/${img}`}
          alt="Фотография блюда"
        />
      </div>
      <div className="card__text">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{descriptor}</p>
        <div className="card__block-price">
          <div className="card__price">
            {`${newPrice} ₽`} {"/ "}
            <span className="card__weight">{`${weight}.`}</span>
          </div>
          <button type="button" className="card__btn-add">
            <svg
              className="card__btn-plus"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1.28564V12.3571"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12.3569 6.82135L1.28551 6.82135"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
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

export default Card;
