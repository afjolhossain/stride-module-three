/* eslint-disable no-undef */
import Swal from "sweetalert2";

const AddProducts = () => {
  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "product added successfully",
    });
  };
  const handleBtnSubmit = async (e) => {
    e.preventDefault();
    const Title = e.target.title.value;
    const Discription = e.target.discription.value;
    const Price = e.target.price.value;
    const Image = e.target.image_url.value;
    const Id = e.target.id.value;

    const data = { Title, Discription, Price, Image, Id };
    console.log(data);
    await fetch("http://localhost:3000/sharts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          alert();
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1 className="text-2xl text-center p-4">Add-Product</h1>
      <form onSubmit={handleBtnSubmit} className="w-2/4 mx-auto mt-4">
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="title"
            placeholder="Title"
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="discription"
            placeholder="Discription"
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="number"
            name="price"
            placeholder="Price"
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="image_url"
            placeholder="image_url"
          />
        </div>
        <div>
          <input
            className="bg-gray-300 w-full h-10 mt-2 rounded p-2"
            type="text"
            name="id"
            placeholder="Id"
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

export default AddProducts;
