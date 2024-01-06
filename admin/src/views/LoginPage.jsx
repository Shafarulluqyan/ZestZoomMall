import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(formInputs),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await response.json();
      const token = data.access_token;
      console.log(data, token, "<<<");

      localStorage.setItem("access_token", token);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="bg-amber-50 rounded-lg shadow-lg p-8 max-w-md">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Admin Side
        </h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-400"
              id="email"
              type="email"
              name="email"
              value={formInputs.email}
              onChange={handleChange}
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
              value={formInputs.password}
              type="password"
              onChange={handleChange}
            />
          </div>
          <h1>
            are you a new admin? Register{" "}
            <Link to="/register">
              <a className="underline">here.</a>
            </Link>
          </h1>
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
