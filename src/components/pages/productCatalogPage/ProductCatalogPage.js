import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { products } from "../../../store/menuList";
import { BasketMini } from "../../elements/basketMini";
import { ProductList } from "../../elements/productList";
import { ButtonOrder } from "../../ui/buttonOrder";

import styles from "./index.module.scss";

export function ProductCatalogPage() {
  const navigate = useNavigate();

  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);

  const handleExit = () => {
    localStorage.setItem("userAutho", false);
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className={styles.productCatalog}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <h1 className={styles.headerBlock__title}>наша продукция</h1>
            <BasketMini
              counter={quantity}
              sum={amount}
              classNames={styles.headerBlock__basket}
            />
            <ButtonOrder
              view={"exit"}
              type={"button"}
              handle={handleExit}
              name={"Выйти"}
            />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}
