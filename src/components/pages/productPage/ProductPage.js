import ButtonToBack from "../../ui/buttonToBack";
import { useNavigate } from "react-router-dom";
import BasketMini from "../../elements/basketMini";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../../elements/product/Product";
import { products } from "../../../store/menuList";
import styles from "./index.module.scss";

function ProductPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const params = useParams();
  const product = products.filter((item) => item.id === params.id);
  const { img, name, description, price, weight } = product[0];

  return (
    <div className={styles.productDetails}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack handleGoBack={goBack} />
            <BasketMini counter={quantity} sum={amount} />
          </div>
        </div>
      </header>
      <Product
        id={params.id}
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
