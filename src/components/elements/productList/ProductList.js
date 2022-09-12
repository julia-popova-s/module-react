import Card from "../card";
import ProductListWrap from "./ProductListWrap.styled.js";

function ProductList({ products }) {
  return (
    <ProductListWrap>
      <div className="container">
        <div className="product-list">
          {products.map((key) => {
            const { id, img, name, description, price, weight } = key;
            return (
              <Card
                key={id}
                id={id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
              />
            );
          })}
        </div>
      </div>
    </ProductListWrap>
  );
}
export default ProductList;
