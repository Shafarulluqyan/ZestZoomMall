import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories when the component mounts
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await fetch("http://localhost:3000/category");
      const data = await res.json(); // Menunggu resolusi Promise
      setCategories(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="mt-10 mx-20">
        <h1 className="text-3xl font-bold mb-4">Category List</h1>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 bg-white border-b">
            <thead className="text-xs text-gray-700 uppercase bg-green-400">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Category Name</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={category._id}
                  className={
                    index % 2 === 0 ? "border-b" : "border-b bg-gray-50"
                  }
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                    <ul>
                      {category.name.map((categoryName, idx) => (
                        <li key={idx}>{categoryName}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
