import imageBnner from "../../assets/image/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage: `url(${imageBnner})`,
      }}
    >
      <div className="bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content"></div>
    </div>
  );
};

export default Banner;
