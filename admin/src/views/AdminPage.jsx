import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Swal from "sweetalert2";

const AdminPage = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdmin();
  }, []);

  const fetchAdmin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();

      setAdmins(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDeleteAdmin = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure want to delete this stuff?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });

      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/users/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.access_token,
          },
        });

        if (!res.ok) {
          const resData = await res.json();
          throw resData;
        }
        fetchAdmin();
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
          title: `Success delete admin!!!`,
        });
      }
    } catch (err) {
      console.error("Error:", err);
      throw err;
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="mt-10 mx-20 overflow-x-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Admin List</h1>
          <Link
            to={"/add-admin"}
            className="bg-green-400 px-3 py-2 rounded-lg text-white hover:bg-green-600 mb-3"
          >
            Add Admin
          </Link>
        </div>
        <div className="shadow-md sm:rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="max-w-full overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 bg-white border-b table-auto">
                <thead className="text-xs text-gray-700 uppercase bg-green-400">
                  <tr>
                    <th className="px-6 py-3">No</th>
                    <th className="px-6 py-3">Username</th>
                    <th className="px-6 py-3">Email</th>
                    <th className="px-6 py-3">Phone Number</th>
                    <th className="px-6 py-3">Address</th>

                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {admins?.map((admin, idx) => (
                    <tr className="border-b" key={admin._id}>
                      <td className="px-6 py-4">{idx + 1}</td>
                      <td className="px-6 py-4 font-medium whitespace-nowrap">
                        {admin.username}
                      </td>
                      <td className="px-6 py-4">{admin.email}</td>
                      <td className="px-6 py-4">{admin.phoneNumber}</td>
                      <td className="px-6 py-4">{admin.address}</td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Link
                            to={`/edit-product/${admin._id}`}
                            className="bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-900"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => handleDeleteAdmin(admin._id)}
                            className="bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-900"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
