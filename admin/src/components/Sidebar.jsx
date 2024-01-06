import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("access_token");
        navigate("/login");
      }
    });
  };

  return (
    <div className="bg-green-400 w-1/5 p-4 min-h-screen flex-shrink-0">
      <Link
        to="/"
        className="block text-2xl font-bold mb-4 hover:font-bold hover:text-black"
      >
        Dashboard
      </Link>
      <ul>
        <li className="mb-2">
          <Link
            to="/products"
            className="block text-xl text-green-800 hover:font-bold"
          >
            Products
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/categories"
            className="block text-xl text-green-800 hover:font-bold"
          >
            Categories
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/histories"
            className="block text-xl text-green-800 hover:font-bold"
          >
            History
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/admin-list"
            className="block text-xl text-green-800 hover:font-bold"
          >
            Admin List
          </Link>
        </li>
      </ul>
      <div className="border-b my-3"></div>
      <div className="flex flex-col">
        <Link
          to={"/login"}
          className="bg-green-500 px-4 py-2 rounded-lg mb-2 text-white hover:bg-green-700"
        >
          Login
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
