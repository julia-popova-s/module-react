import ButtonForOrder from "../../ui/buttonForOrder";
import { ProductWrap } from "./ProductWrap.styled";
import { addProduct } from "../../../store/reducers/basket";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import getPriceWithSpace from "../../../utils/getPriceWithSpace";

function Product({ id, img, name, description, price, weight }) {
  const newPrice = getPriceWithSpace(price);
  const dispatch = useDispatch();
  let item;
  const handleAddProduct = () => {
    item = { id: id, img: img, name: name, price: price, weight: weight };
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
              alt="Фотография блюда"
            />
          </div>
          <div className="product__text">
            <div className="product__title">{name}</div>
            <div className="product__description">{description}</div>
            <div className="product__block-price">
              <div className="product__price">
                {`${newPrice} ₽`} {"/ "}
                <span className="product__weight">{`${weight}.`}</span>
              </div>
              <Link to={"/basket"}>
                <ButtonForOrder
                  name={"В корзину"}
                  type={"button"}
                  handle={handleAddProduct}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProductWrap>
  );
}
export default Product;
