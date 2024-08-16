import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="projects">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Projects
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md text-md border border-neutral-800">
              <img
                className="object-contain rounded-t-md"
                src={testimonial.image}
              />
              <div className="m-4">
                <h1>{testimonial.title}</h1>
                <p className="text-md font-thin">{testimonial.text}</p>
                <div className="flex mt-8 items-start">
                  <div>
                    <span className="text-sm font-normal italic text-neutral-600">
                      {testimonial.stack}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
