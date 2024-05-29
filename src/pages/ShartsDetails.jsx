import { useLoaderData } from "react-router-dom";

const ShartsDetails = () => {
  const shart = useLoaderData();
  console.log(shart);
  const { name, price, description, image_url } = shart;
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row ">
        <img src={image_url} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <h1 className="text-5xl font-bold">{price}</h1>
          <button className="btn btn-primary mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default ShartsDetails;
