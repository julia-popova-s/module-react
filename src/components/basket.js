import "./basket.scss";
function BasketShop({ url, counter, sum }) {
  return (
    <div className="basketshop">
      <span className="basketshop__label">
        <p>{counter} товара</p>
        <p>на сумму {sum} ₽</p>
      </span>
      <img src={url} className="basketshop__icon" alt="Корзина" />
    </div>
  );
}
export default BasketShop;
