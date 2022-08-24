import { CardItem } from "./CardItem.styled.js";
// import "./card.scss";
function Card({ url, title, description, price, weight, count, unit }) {
  return (
    <CardItem>
      <img className="card__preview" src={url} alt="Фотография блюда" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <div className="card__block">
        <div className="card__price">
          {price} ₽ /{" "}
          <span className="card__weight">
            {weight} {count} {unit}
          </span>
        </div>
        <svg
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
        </svg>
      </div>
    </CardItem>
  );
}
export default Card;
