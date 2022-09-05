import Card from "../card";

function ProductList({
  products,
  onGetQuantityOfProducts,
  onGetAmountOfOrder,
}) {
  return (
    <section className="product-list">
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
    </section>
  );
}
export default ProductList;
