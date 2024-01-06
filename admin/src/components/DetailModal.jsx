import PropTypes from "prop-types";

const DetailModal = ({ handleClose, product }) => {
  const { name, price, colour, images } = product;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-10 bg-white items-center rounded-lg shadow-xl">
        <div className="grid grid-cols-2 gap-3">
          {Object.values(images).map((imgUrl, index) => (
            <div
              key={index}
              className="h-40 w-40 md:h-56 md:w-56 lg:h-60 lg:w-60 bg-cover bg-center rounded-md"
              style={{
                backgroundImage: `url('${imgUrl}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-lg mb-2">{price}</p>
          <p className="text-lg">{`Colour: ${colour}`}</p>
        </div>
      </div>
      <button
        onClick={handleClose}
        className="absolute top-8 right-16 bg-red-500 px-4 py-2 rounded-md text-white"
      >
        Close
      </button>
    </div>
  );
};

DetailModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default DetailModal;
