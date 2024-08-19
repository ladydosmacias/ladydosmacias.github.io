const PicturePreview = ({ visible, onClose, image }) => {
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;

  console.log(windowHeight);

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
      style={{
        height: windowHeight,
        overflowY: "scroll",
      }}
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <img
        src={image}
        style={{ height: windowHeight / 1.4 }}
        alt="Logo"
        className="self-center flex mt-7 rounded-lg"
      />
    </div>
  );
};

export default PicturePreview;
