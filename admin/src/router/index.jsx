import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../views/DashboardPage";
import CategoryPage from "../views/CategoryPage";
import LoginPage from "../views/LoginPage";
import ProductsPage  from "../views/ProductsPage";
import Layout from "../components/Layouts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    // loader: () => {
    //   if (!localStorage.access_token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
    ],
  },
]);

export default router;
