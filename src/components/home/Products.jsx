/* eslint-disable react/prop-types */

import SingleProduct from "./SingleProduct";

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>

      <div className="flex gap-2 px-6 justify-center items-center flex-wrap-reverse	">
        {data.slice(0, 3).map((shart) => (
          <SingleProduct key={shart.id} shart={shart} />
        ))}
      </div>
    </div>
  );
};

export default Products;
