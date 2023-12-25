import Sidebar from "../components/Sidebar";

const ProductsPage = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-semibold text-neutral-800 mb-6">
          Product List
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Action
                </th>
                {/* Add more columns as needed */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Sample data, replace with your actual data */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">1</td>
                <td className="px-6 py-4 whitespace-nowrap">Product A</td>
                <td className="px-6 py-4 whitespace-nowrap">$20.00</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="bg-blue-500 px-3 py-2 rounded-md">
                    Edit
                  </button>
                  <button className="bg-red-500 px-3 py-2 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">2</td>
                <td className="px-6 py-4 whitespace-nowrap">Product B</td>
                <td className="px-6 py-4 whitespace-nowrap">$30.00</td>
                <td className="px-6 py-4 whitespace-nowrap space-x-2">
                  <button className="bg-blue-500 px-3 py-2 rounded-md">
                    Edit
                  </button>
                  <button className="bg-red-500 px-3 py-2 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
