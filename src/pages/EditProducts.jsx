import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProducts = () => {
  const allproduct = useLoaderData();

  const [title, setTitle] = useState(allproduct.title);
  const [price, setPrice] = useState(allproduct.price);
  const [id, setId] = useState(allproduct.id);
  const [description, setDescription] = useState(allproduct.description);
  const [image_url, setImageURL] = useState(allproduct.image_url);

  const handleBtnSubmit = async (e) => {
    e.preventDefault();

    const Title = e.target.title.value;
    const Discription = e.target.discription.value;
    const Price = e.target.price.value;
    const Image = e.target.image_url.value;
    const id = e.target.id.value;

    const data = { Title, Discription, Price, Image, id };

    await fetch(`http://localhost:3000/sharts/${allproduct.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div>
      <h1 className="text-2xl text-center p-4">Edit-Product</h1>
      <form onSubmit={handleBtnSubmit} className="w-2/4 mx-auto mt-4">
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            value={title}
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="discription"
            placeholder="Discription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="image_url"
            placeholder="image_url"
            value={image_url}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="id"
            placeholder="Id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            className="btn mt-3 w-full bg-red-800 text-white"
            type="submit"
            name="id"
            placeholder="Id"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProducts;
