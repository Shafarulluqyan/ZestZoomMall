const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-amber-50 rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Admin Side
        </h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              name="email"
              type="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <div>
            <button className="w-full bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
