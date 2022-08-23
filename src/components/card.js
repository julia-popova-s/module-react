import "./card.css";
function Card({ url, title, description, price, wight, count, unit }) {
  return (
    <div className="card">
      <img className="card__preview" src={url} alt="Фотография блюда" />
      <h2 className="card__title">{title}</h2>
      <p className="card__description">{description}</p>
      <div className="card_price">
        {price} ₽ / {wight} {count} {unit}
      </div>
    </div>
  );
}
export default Card;
