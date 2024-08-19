import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div
      className="relative mt-20 border-b border-neutral-800 min-h-[400px]"
      id="about"
    >
      <div className="text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            About
          </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Originally from South America, but raised in Spain. I am an
          experienced dancer for many years and I have learnt from the
          top-dancers around the world owning my personal style.
        </p>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>

                {feature.text !== "Levels of teaching" ? (
                  <p className="text-md p-0.5 mb-20 text-neutral-500">
                    {feature.description}
                  </p>
                ) : (
                  <div className="mb-20">
                    {feature.description.map((item) => (
                      <li key={item} className="text-neutral-500">
                        {item}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
