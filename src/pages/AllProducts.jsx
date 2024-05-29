import { useEffect, useState } from "react";
import AllItem from "./AllItem";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/sharts/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const DeleteItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl text-center p-6">Manage All Products</h1>
      <div className="flex gap-2 px-6 justify-center items-center flex-wrap">
        {products.map((item) => (
          <AllItem key={item.id} item={item} CardDelete={DeleteItem} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
