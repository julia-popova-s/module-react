import { CardItem } from "./CardItem.styled.js";
import getPriceWithSpace from "../../utils/getPriceWithSpace.js";
import cutPartOfLine from "../../utils/cutPartOfLine.js";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/reducers/basket";
import ButtonCircle from "../../ui/buttonCircle";
import { Link } from "react-router-dom";
function Card({ id, img, name, description, price, weight }) {
  const newPrice = getPriceWithSpace(price);
  const title = cutPartOfLine(name, 51);
  const descriptor = cutPartOfLine(description, 127);
  const margin = name.length > 24 ? true : false;
  const dispatch = useDispatch();
  let item;
  const handleAddProduct = () => {
    item = { id: id, img: img, name: name, price: price };
    dispatch(addProduct(item));
  };

  return (
    <CardItem margin={margin}>
      <Link to={`/${id}/${name}`} className="card__link">
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
          </div>
        </div>
      </Link>
      <ButtonCircle handle={handleAddProduct} view={"plus"} />
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
