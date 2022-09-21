import { CardBasket } from "../cardBasket";
import { BasketListWrap } from "./BasketListWrap.styled";

export function BasketList({ products }) {
  return (
    <BasketListWrap>
      <div className="container">
        <div className="basket-list">
          {products.map((key) => {
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
          })}
        </div>
      </div>
    </BasketListWrap>
  );
}
