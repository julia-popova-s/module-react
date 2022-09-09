import "./index.scss";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";
import BasketList from "../../elements/basketList";
import { useContext } from "react";
import { Context } from "../../../App";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BasketPage() {
  // const { data, setData, sumСalculation } = useContext(Context);
  // const sum = sumСalculation();
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);
  return (
    <div className="basket">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <Link to="/" className="header-block__link">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="35.000000pt"
                height="25.000000pt"
                viewBox="0 0 1280.000000 1070.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1070.000000) scale(0.100000,-0.100000)"
                  fill="#d58c51"
                  stroke="none"
                >
                  <path
                    d="M2672 8027 l-2672 -2672 2673 -2673 2673 -2673 1769 -6 1770 -5
-2020 2021 -2020 2021 3977 0 3978 0 0 1300 0 1300 -3990 -2 c-2195 -2 -3990
-1 -3990 2 0 3 912 917 2027 2032 l2028 2028 -1765 0 -1765 0 -2673 -2673z"
                  />
                </g>
              </svg>
            </Link>
            <h2 className="header-block__title">
              корзина с выбранными товарами
            </h2>
          </div>
        </div>
      </header>
      <BasketList
        products={basket}
        // onDelete={(id) =>
        //   setData(() => {
        //     const index = data.findIndex((elem) => elem.id === id);
        //     if (index !== -1) {
        //       return [...data.slice(0, index), ...data.slice(index + 1)];
        //     }
        //   })
        // }
      />
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <OrderAmount sum={0} />
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
