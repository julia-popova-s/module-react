import { FC } from 'react';
import { Card } from '../card';
import { ProductListWrap } from './ProductListWrap.styled';

import { Product } from '../../../customTypes/product';

type ProductListProps = {
  products: Product[];
};

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <ProductListWrap>
      <div className="container">
        <div className="product-list">
          {products.map((item) => {
            const { id, img, name, description, price, weight, units } = item;
            return (
              <Card
                key={id}
                id={id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
                units={units}
              />
            );
          })}
        </div>
      </div>
    </ProductListWrap>
  );
};
