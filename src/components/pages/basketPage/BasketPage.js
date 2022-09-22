import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { OrderAmount } from "../../elements/orderAmount";
import { ButtonOrder } from "../../ui/buttonOrder";
import { BasketList } from "../../elements/basketList";
import { ButtonToBack } from "../../ui/buttonToBack";
import styles from "./index.module.scss";

export function BasketPage() {
  const basket = useSelector((state) => state.basket.basket);
  const amount = useSelector((state) => state.basket.totalAmount);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleExit = () => {
    localStorage.setItem("userAutho", false);
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <div className={styles.basket}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBlock}>
            <ButtonToBack handleGoBack={goBack} />
            <h2 className={styles.headerBlock__title}>
              корзина с выбранными товарами
            </h2>
            <ButtonOrder
              type={"button"}
              classNames={"btn-exit"}
              handle={handleExit}
              name={"Выйти"}
            />
          </div>
        </div>
      </header>
      <BasketList products={basket} />
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerBlock}>
            <OrderAmount sum={amount} />
            <ButtonOrder
              type={"button"}
              name={"Оформить заказ"}
              view={"order"}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
