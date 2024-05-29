import { useLoaderData } from "react-router-dom";
import Accordian from "../components/home/Accordian";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import About from "./About";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Banner />
      <Products data={data} />
      <About></About>
      <Accordian />
    </div>
  );
};

export default Home;
