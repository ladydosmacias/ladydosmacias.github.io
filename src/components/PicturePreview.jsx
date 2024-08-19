import photo2 from "../assets/price-list-new.png";

const PicturePreview = ({ visible, onClose, image }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="flex flex-row	overflow-y-auto fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <img src={image} alt="Logo" className="mt-7 rounded-lg w-4/12 " />
    </div>
  );
};

export default PicturePreview;
