import { Link } from "react-router-dom";

import { CardBasket } from "../cardBasket";
import { BasketListWrap } from "./BasketListWrap.styled";

export function BasketList({ products }) {
  return (
    <BasketListWrap>
      <div className="container">
        <div className="basket-list">
          {products.length === 0 ? (
            <div className="basket-list__alert">
              {"В корзине пока пусто. Загляните на"}
              <Link to={"/"} className="basket-list__link">
                {" главную"}
              </Link>
              {", чтобы выбрать товары"}
            </div>
          ) : (
            products.map((key) => {
              const { id, img, name, price, quantity } = key;
              return (
                <CardBasket
                  key={id}
                  id={id}
                  img={img}
                  name={name}
                  price={price}
                  quantity={quantity}
                />
              );
            })
          )}
        </div>
      </div>
    </BasketListWrap>
  );
}
