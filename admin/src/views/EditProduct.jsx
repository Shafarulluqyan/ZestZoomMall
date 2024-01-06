import { Link, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const EditProduct = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    size: "",
    colour: "",
    price: "",
    description: "",
    mainImg: "",
    images: {
      imgUrl1: "",
      imgUrl2: "",
      imgUrl3: "",
      imgUrl4: "",
    },
  });
  const { _id } = useParams();

  useEffect(() => {
    // Fetch existing product data for editing
    const fetchProductById = async () => {
      try {
        const response = await fetch(`http://localhost:3000/products/${_id}`);
        const data = await response.json();
        // console.log(data, "<<<ini data nya");
        setFormInputs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductById();
  }, [_id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    }));
  };

  const handleImageChange = (event, name) => {
    const { value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      images: {
        ...prevInputs.images,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/products/${_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(formInputs),
      });

      const data = await res.json();
      if (!res.ok) throw data;

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Success updated product!!!`,
      });

      navigate("/products");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Add Product Form */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Add Product</h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-md space-y-2 overflow-hidden"
        >
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={formInputs.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              placeholder="Product Name"
            />
          </div>

          {/* Size and Color (flex-container) */}
          {/* Size */}
          <div className="flex space-x-4">
            {/* Size */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Size
              </label>
              <input
                type="text"
                name="size"
                value={formInputs.size}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Size"
              />
            </div>

            {/* Color */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Color
              </label>
              <input
                type="text"
                name="colour"
                value={formInputs.colour}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Color"
              />
            </div>
          </div>
          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formInputs.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              placeholder="Price"
            />
          </div>

          {/* MainImg */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              MainImg
            </label>
            <input
              type="text"
              name="mainImg"
              value={formInputs.mainImg}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              placeholder="Main Image"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formInputs.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
              placeholder="Description"
            ></textarea>
          </div>

          {/* Image URLs (2 per baris) */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {/* Image URL 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL 1
              </label>
              <input
                type="text"
                name="imgUrl1"
                value={formInputs.images.imgUrl1}
                onChange={(e) => handleImageChange(e, "imgUrl1")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Image URL 1"
              />
            </div>

            {/* Image URL 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL 2
              </label>
              <input
                type="text"
                name="imgUrl2"
                value={formInputs.images.imgUrl2}
                onChange={(e) => handleImageChange(e, "imgUrl2")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Image URL 2"
              />
            </div>

            {/* Image URL 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL 3
              </label>
              <input
                type="text"
                name="imgUrl3"
                value={formInputs.images.imgUrl3}
                onChange={(e) => handleImageChange(e, "imgUrl3")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Image URL 3"
              />
            </div>

            {/* Image URL 4 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image URL 4
              </label>
              <input
                type="text"
                name="imgUrl4"
                value={formInputs.images.imgUrl4}
                onChange={(e) => handleImageChange(e, "imgUrl4")}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Image URL 4"
              />
            </div>
          </div>
          {/* Submit Button */}
          <div className="space-x-3">
            <button
              type="submit"
              className="bg-green-500 px-4 py-2 rounded-md text-white"
            >
              Add Product
            </button>

            <Link
              to={"/products"}
              type="submit"
              className="bg-red-500 px-4 py-2 rounded-md text-white"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
