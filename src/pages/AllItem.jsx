import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllItem = ({ item, CardDelete }) => {
  const { name, image_url, description, price, id } = item;
  const handleDelete = async () => {
    await fetch(`http://localhost:3000/sharts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        CardDelete(id);
        alert("are you sure?want to delete");
      });
  };
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-xl p-2">
        <figure>
          <img className="w-3/4 mt-4" src={image_url} alt="shart" />
        </figure>
        <div className="card-body items-right">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <h4>Price:{price}</h4>
          <div className="justify-between flex">
            <Link to={`/products/${id}`}>
              <button className="btn btn-outline btn-info">Details</button>
            </Link>
            <Link to={`edit/${id}`}>
              <button className="btn btn-outline btn-info">Edit</button>
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-outline btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItem;
