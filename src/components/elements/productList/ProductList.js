import Card from "../card";
import ProductListWrap from "./ProductListWrap.styled.js";

function ProductList({ products, onGetCard }) {
  return (
    <ProductListWrap>
      <div className="container">
        <div className="product-list">
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
                onGetCard={() => onGetCard(id)}
              />
            );
          })}
        </div>
      </div>
    </ProductListWrap>
  );
}
export default ProductList;
