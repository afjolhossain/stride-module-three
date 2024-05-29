import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ shart }) => {
  const { name, image_url, description, price, id } = shart;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="w-3/4" src={image_url} alt="shart" />
      </figure>

      <div className="card-body items-right">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <h4>Price:{price}</h4>
        <div>
          <Link to={`/products/${id}`}>
            <button className="w-full btn btn-outline btn-info ">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
