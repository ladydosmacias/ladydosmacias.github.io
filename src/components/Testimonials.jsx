import { useState } from "react";
import ReactGA from "react-ga4";
import { testimonials } from "../constants";
import { isProduction } from "../constants/Utils";
import PicturePreview from "./PicturePreview";

const Testimonials = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleOnOpen = (content, label) => {
    // Send click event
    if (isProduction) {
      ReactGA.event({
        category: "private-class",
        action: "click",
        label: label,
        value: 1,
      });
    }

    setModalContent(content);
    setShowModal(true);
  };

  const handleOnClose = () => setShowModal(false);

  return (
    <>
      <div className="mt-20 tracking-wide" id="private">
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide">
            Private classes
          </h2>
          <p className="mt-10 text-lg text-neutral-500 max-w-4xl">
            We are working on enhancing the booking system for the classes. In
            the meanwhile you can book your private class by contacting me
            directly either by email or phone (SMS/Whatsapp or Call). You can
            find contact details from below. Lets book the perfect time for you!
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <button
                onClick={() =>
                  handleOnOpen(testimonial.image, testimonial.title)
                }
                className="bg-neutral-900 rounded-md text-md border border-neutral-800"
              >
                <img
                  className="object-contain rounded-t-md"
                  src={testimonial.cover}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
      <PicturePreview
        onClose={handleOnClose}
        visible={showModal}
        image={modalContent}
      />
    </>
  );
};

export default Testimonials;
