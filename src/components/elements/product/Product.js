import ButtonForOrder from "../../ui/buttonForOrder";
import { ProductWrap } from "./ProductWrap.styled";
function Product({ img, name, description, price, weight }) {
  return (
    <ProductWrap>
      <div className="container">
        <div className="product">
          <div className="product__view">
            <img
              className="product__img"
              src={`/images/product/2.png`}
              alt="Фотография блюда"
            />
          </div>
          <div className="product__text">
            <div className="product__title">{name}</div>
            <div className="product__description">{description}</div>
            <div className="product__block-price">
              <div className="product__price">
                {`${price} ₽`} {"/ "}
                <span className="product__weight">{`${weight}.`}</span>
              </div>
              <ButtonForOrder name={"В корзину"} />
            </div>
          </div>
        </div>
      </div>
    </ProductWrap>
  );
}
export default Product;
