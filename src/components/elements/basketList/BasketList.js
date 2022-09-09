import CardBasket from "../cardBasket";
import BasketListWrap from "./BasketListWrap.styled";

function BasketList({ products, onDelete, onGetAmountOfOrder }) {
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
                onDelete={() => onDelete(id)}
                onGetAmountOfOrder={() => {
                  onGetAmountOfOrder(id);
                }}
                quantity={quantity}
              />
            );
          })}
        </div>
      </div>
    </BasketListWrap>
  );
}
export default BasketList;
