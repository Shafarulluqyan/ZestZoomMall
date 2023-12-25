import Sidebar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-5 overflow-y-auto">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        {/* Grid untuk Kolom Data */}
        <div className="grid grid-cols-3 gap-4">
          {/* Kolom 1 - Products */}
          <div className="bg-white p-3 rounded shadow-lg w-full">
            <h2 className="font-bold text-lg">Products</h2>
            <p className="font-bold">10</p>
          </div>

          {/* Kolom 2 - Categories */}
          <div className="bg-white p-3 rounded shadow-lg w-full">
            <h2 className="font-bold text-lg">Categories</h2>
            <p className="font-bold">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
