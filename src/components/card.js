import "./card.scss";
function Card({ url, title, description, price, weight, count, unit }) {
  return (
    <div className="card">
      <img className="card__preview" src={url} alt="Фотография блюда" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <div className="card__block">
        <div className="card__price">
          {price} ₽ /{" "}
          <span className="card__wight">
            {weight} {count} {unit}
          </span>
        </div>
        <div className="card__btn"></div>
      </div>
    </div>
  );
}
export default Card;
