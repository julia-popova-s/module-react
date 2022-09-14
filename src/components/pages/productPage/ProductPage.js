import ButtonToBack from "../../ui/buttonToBack";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BasketMini from "../../elements/basketMini";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.scss";
import Product from "../../elements/product/Product";
import { products } from "../productsPage/menuList";

function ProductPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const params = useParams();
  const product = products.filter((item) => item.id === params.id);
  const { img, name, description, price, weight } = product[0];
  console.log(name);
  console.log(product);
  return (
    <div className="product-details">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <ButtonToBack handleGoBack={goBack} />
            <BasketMini counter={quantity} sum={amount} />
          </div>
        </div>
      </header>
      <Product
        img={img}
        name={name}
        description={description}
        price={price}
        weight={weight}
      />
    </div>
  );
}
export default ProductPage;
