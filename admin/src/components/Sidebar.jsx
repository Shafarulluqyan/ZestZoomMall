const Sidebar = () => {
  return (
    <div className="bg-green-400 w-1/5 p-4 h-screen">
      <a
        href="/"
        className="block text-2xl font-bold mb-4 hover:font-bold hover:text-black"
      >
        Dashboard
      </a>
      <ul>
        <li className="mb-2">
          <a
            href="/products"
            className="block text-lg text-green-800 hover:font-bold"
          >
            Products
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/categories"
            className="block text-lg text-green-800 hover:font-bold"
          >
            Categories
          </a>
        </li>
        <li className="mb-2">
          <a
            href="/histories"
            className="block text-lg text-green-800 hover:font-bold"
          >
            History
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
