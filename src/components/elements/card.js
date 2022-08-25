import { CardItem } from "./CardItem.styled.js";
import getPrice from "../base/base.js";
// import "./card.scss";
function Card({ url, title, description, price, weight, count, unit }) {
  const newPrice = getPrice(price);
  return (
    <CardItem>
      <img className="card__preview" src={url} alt="Фотография блюда" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <div className="card__block">
        <div className="card__price">
          {newPrice} ₽ /{" "}
          <span className="card__weight">
            {weight} {count} {unit}
          </span>
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
            <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        {/* <svg
          className="card__add"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" stroke="white" />
          <path d="M15 9.28564V20.3571" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg> */}
      </div>
    </CardItem>
  );
}
export default Card;
