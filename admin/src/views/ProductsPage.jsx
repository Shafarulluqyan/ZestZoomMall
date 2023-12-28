import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="mt-10 mx-20">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 bg-white border-b">
            <thead className="text-xs text-gray-700 uppercase bg-green-400">
              <tr>
                <th className="px-6 py-3">No</th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Size</th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  Apple MacBook Pro 17
                </td>
                <td className="px-6 py-4">Rp.400.000</td>
                <td className="px-6 py-4">XL</td>
                <td className="px-6 py-4">www.imageurl.jpg</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>

              <tr className="border-b bg-gray-50">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4 font-medium whitespace-nowrap">
                  Microsoft Surface Pro
                </td>
                <td className="px-6 py-4">Rp.400.000</td>
                <td className="px-6 py-4">L</td>
                <td className="px-6 py-4">www.imageurl.jpg</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
