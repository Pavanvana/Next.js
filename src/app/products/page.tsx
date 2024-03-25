import Link from "next/link";

const productsList = [
  {
    id: 1,
    name: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
  },
];
const ProductsList = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1>Products Page</h1>
      <ul>
        {productsList.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
