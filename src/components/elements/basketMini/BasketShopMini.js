import { BasketMini } from "./BasketMini.styled";
import getPriceWithSpace from "../../utils/getPriceWithSpace";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import getWordProduct from "../../utils/getWordProduct";

function BasketShopMini({ url, counter, sum }) {
  const newSum = getPriceWithSpace(sum);
  const word = getWordProduct(counter);
  return (
    <BasketMini>
      <div className="basket-mini__text">
        <p className="basket-mini__text-item">{`${counter} ${word}`}</p>
        <p className="basket-mini__text-item"> на сумму {`${newSum} ₽`}</p>
      </div>
      <Link to="/shoplist">
        <img src={url} className="basket-mini__icon" alt="Корзина" />
      </Link>
    </BasketMini>
  );
}
BasketShopMini.propTypes = {
  url: PropTypes.string,
  counter: PropTypes.number,
  sum: PropTypes.number,
};
export default BasketShopMini;
