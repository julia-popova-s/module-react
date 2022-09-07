import CardForBasket from "../cardBasket";
import BasketListWrap from "./BasketListWrap.styled";
function BasketList({ products, onDelete, onGetAmountOfOrder }) {
  return (
    <BasketListWrap>
      <div className="container">
        {products.map((key) => {
          const { id, img, name, price } = key;
          return (
            <CardForBasket
              key={id}
              img={img}
              name={name}
              price={price}
              onDelete={() => onDelete(id)}
              onGetAmountOfOrder={() => {
                onGetAmountOfOrder(id);
              }}
            />
          );
        })}
      </div>
    </BasketListWrap>
  );
}
export default BasketList;
