import CardForBasket from "../cardBasket";
import BasketListWrap from "./BasketListWrap.styled";

function BasketList({ products, onDelete, onGetAmountOfOrder }) {
  return (
    <BasketListWrap>
      <div className="container">
        <div className="basket-list">
          {products.map((key) => {
            const { id, img, name, price, quantity } = key;
            return (
              <CardForBasket
                key={id}
                img={img}
                name={name}
                price={price * quantity}
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
