import pic1 from "../assets/pic1.png";
import video3 from "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="home">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Equally for everyone,
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          one salsa step at a time!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Are you tired of receiving classes while not seeing any change? Want to
        learn and improve your dancing skills? Let's dance together and I can
        take your Salsa and Bachata moves to the next step!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Explore
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src={pic1}
          alt="Logo"
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        />
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your Browser does not support HTML video.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
