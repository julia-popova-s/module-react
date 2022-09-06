import Card from "../card";
import ProductListWrap from "./ProductListWrap.styled.js";

function ProductList({
  products,
  onGetQuantityOfProducts,
  onGetAmountOfOrder,
}) {
  return (
    <ProductListWrap>
      {products.map((key) => {
        const { id, img, name, description, price, weight } = key;
        return (
          <Card
            key={id}
            img={img}
            name={name}
            description={description}
            price={price}
            weight={weight}
            onGetQuantityOfProducts={() => onGetQuantityOfProducts()}
            onGetAmountOfOrder={() =>
              onGetAmountOfOrder(+price.replace(" ", ""))
            }
          />
        );
      })}
    </ProductListWrap>
  );
}
export default ProductList;