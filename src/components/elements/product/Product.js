import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ButtonOrder } from "../../ui/buttonOrder";
import { ProductWrap } from "./ProductWrap.styled";
import { addProduct } from "../../../store/reducers/basket";
import { getFormatNumber } from "../../../utils/getFormatNumber";

export function Product({ id, img, name, description, price, weight }) {
  const dispatch = useDispatch();

  const newPrice = getFormatNumber(price);

  let item;
  const handleAddProduct = () => {
    item = { id, img, name, price };
    dispatch(addProduct(item));
  };

  return (
    <ProductWrap>
      <div className="container">
        <div className="product">
          <div className="product__view">
            <img
              className="product__img"
              src={`/images/products/${img}`}
              alt={name}
            />
          </div>
          <div className="product__text">
            <div className="product__title">{name}</div>
            <div className="product__description">{description}</div>
            <div className="product__block-price">
              <div className="product__price">
                {newPrice} {"/ "}
                <span className="product__weight">{`${weight}.`}</span>
              </div>
              <Link to={"/basket"}>
                <ButtonOrder
                  name={"В корзину"}
                  type={"button"}
                  handle={handleAddProduct}
                  view={"order"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProductWrap>
  );
}
