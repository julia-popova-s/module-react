import styles from "./index.module.scss";
import { products } from "../../../store/menuList";
import BasketMini from "../../elements/basketMini";
import ProductList from "../../elements/productList";
import { useSelector } from "react-redux";
import ButtonToBack from "../../ui/buttonToBack";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className={styles.productMenu}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack
              handleGoBack={goBack}
              classNames={styles.headerBlock__button}
            />
            <h1 className={styles.headerBlock__title}>наша продукция</h1>
            <BasketMini
              counter={quantity}
              sum={amount}
              classNames={styles.headerBlock__basket}
            />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default ProductsPage;
