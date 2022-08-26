import { CardItem } from "./CardItem.styled.js";
import getPrice from "../base/base.js";
function Card({ img, name, description, price, weight }) {
  const newPrice = getPrice(price);
  return (
    <CardItem>
      <img
        className="card__preview"
        src={"/images/" + img}
        alt="Фотография блюда"
      />
      <h2 className="card__title">{name}</h2>
      <p className="card__description">{description}</p>
      <div className="card__block">
        <div className="card__price">
          {newPrice} ₽ / <span className="card__weight">{weight + "."}</span>
        </div>
        <button className="card__btn-add">
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
    </CardItem>
  );
}
export default Card;
