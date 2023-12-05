import { Card } from '../card';
import { ProductListWrap } from './ProductListWrap.styled.js';

export function ProductList({ products }) {
  return (
    <ProductListWrap>
      <div className="container">
        <div className="product-list">
          {products.map((item) => {
            const { id, img, name, description, price, weight } = item;
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
