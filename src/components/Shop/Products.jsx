import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Wireless Headphones",
    price: 59.99,
    description: "High-quality wireless headphones with noise cancellation.",
  },
  {
    id: "p2",
    title: "Smart Watch",
    price: 129.99,
    description: "Feature-packed smartwatch with heart rate monitoring.",
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
