import styles from "./index.module.scss";
import { products } from "../../../store/menuList";
import { BasketMini } from "../../elements/basketMini";
import { ProductList } from "../../elements/productList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonExit } from "../../ui/buttonExit/";

export function ProductsPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);
  const navigate = useNavigate();
  const handleExit = () => {
    localStorage.setItem("userAutho", false);
    setTimeout(() => navigate("/login"), 1000);
  };
  return (
    <div className={styles.productMenu}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <h1 className={styles.headerBlock__title}>наша продукция</h1>
            <BasketMini
              counter={quantity}
              sum={amount}
              classNames={styles.headerBlock__basket}
            />
            <ButtonExit handle={handleExit} name={"Выйти"} />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}
