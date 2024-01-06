import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddAdmin = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
    profilePicture: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({
          username: formInputs.username,
          email: formInputs.email,
          password: formInputs.password,
          phoneNumber: formInputs.phoneNumber,
          address: formInputs.address,
          profilePicture: formInputs.profilePicture,
        }),
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
        title: `Success added new admin!!!`,
      });

      navigate("/admin-list");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-4">Add New Admin</h1>
        <form onSubmit={handleSubmit} className="max-w-md space-y-4">
          {/* Admin Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Admin Name
            </label>
            <input
              type="text"
              name="username"
              value={formInputs.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Admin Name"
            />
          </div>

          {/* email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              email
            </label>
            <input
              type="text"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="email"
            />
          </div>

          {/* password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              password
            </label>
            <input
              type="text"
              name="password"
              value={formInputs.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="password"
            />
          </div>

          {/* phoneNumber */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              phoneNumber
            </label>
            <input
              type="number"
              name="phoneNumber"
              value={formInputs.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="phoneNumber"
            />
          </div>

          {/* profilePicture */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              profilePicture
            </label>
            <input
              type="text"
              name="profilePicture"
              value={formInputs.profilePicture}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Profile Picture"
            />
          </div>

          {/* address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              address
            </label>
            <textarea
              name="address"
              value={formInputs.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="address"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 px-4 py-2 rounded-md text-white"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAdmin;
