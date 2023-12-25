const Sidebar = () => {
    return (
      <div className="bg-green-200 w-1/5 p-4">
        <a href="/" className="block text-2xl font-bold mb-4">
          Dashboard
        </a>
        <ul>
          <li className="mb-2">
            <a href="/products" className="block text-lg text-green-800 hover:underline">
              Products
            </a>
          </li>
          <li className="mb-2">
            <a href="/categories" className="block text-lg text-green-800 hover:underline">
              Categories
            </a>
          </li>
          <li className="mb-2">
            <a className="block text-lg text-green-800 hover:underline">History</a>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
  