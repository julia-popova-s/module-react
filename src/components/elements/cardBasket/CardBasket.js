import { CardBasketWrap } from "./CardBasketWrap.styled.js";
import { getPriceWithSpace } from "../../../utils/getPriceWithSpace.js";
import { cutPartOfLine } from "../../../utils/cutPartOfLine.js";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  minusProduct,
  plusProduct,
} from "../../../store/reducers/basket";
import { Link } from "react-router-dom";
import { ButtonCircle } from "../../ui/buttonCircle";
export function CardBasket({ id, img, name, price, quantity }) {
  const newPrice = getPriceWithSpace(price * quantity);
  const title = cutPartOfLine(name, 47);

  const dispatch = useDispatch();
  let item = { id: id };

  const handleDeleteProduct = () => {
    dispatch(removeProduct(item));
  };
  const handlePlusProduct = () => {
    dispatch(plusProduct(item));
  };
  const handleMinusProduct = () => {
    item = { id: id, quantity: quantity };
    dispatch(minusProduct(item));
  };

  return (
    <CardBasketWrap>
      <Link to={`/${id}/${name}`} className="card__link">
        <div className="card__preview">
          <img
            className="card__img"
            src={`/images/basket/${img}`}
            alt="Фотография блюда"
          />
        </div>
      </Link>

      <div className="card__text">
        <Link to={`/${id}/${name}`} className="card__link">
          {title}
        </Link>
        <div className="card__block-price">
          <ButtonCircle
            handle={handlePlusProduct}
            view={"plus"}
            classNames={"card__btn_color"}
          />
          <span className="card__quantity"> {`${quantity} шт.`}</span>
          <ButtonCircle
            handle={handleMinusProduct}
            view={"minus"}
            classNames={"card__btn_color"}
          />
          <span className="card__price">{`${newPrice} ₽`}</span>
          <ButtonCircle
            handle={handleDeleteProduct}
            view={"delete"}
            classNames={"card__btn_color"}
          />
        </div>
      </div>
    </CardBasketWrap>
  );
}

CardBasket.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};
