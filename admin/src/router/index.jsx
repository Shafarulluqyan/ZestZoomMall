import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "../views/DashboardPage";
import CategoryPage from "../views/CategoryPage";
import LoginPage from "../views/LoginPage";
import ProductsPage from "../views/ProductsPage";
import Layout from "../components/Layouts";
import HistoryPage from "../views/HistoryPage";
import AddProduct from "../views/AddProduct";
import EditProduct from "../views/EditProduct";
import AddAdmin from "../views/AddAdmin";
import AdminPage from "../views/AdminPage";
import EditAdmin from "../views/EditAdmin";

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
        path: "/edit-product/:_id",
        element: <EditProduct />,
      },
      {
        path: "/add-products",
        element: <AddProduct />,
      },
      {
        path: "/categories",
        element: <CategoryPage />,
      },
      {
        path: "/histories",
        element: <HistoryPage />,
      },
      {
        path: "/admin-list",
        element: <AdminPage />,
      },
      {
        path: "/add-admin",
        element: <AddAdmin />,
      },
      {
        path: "/edit-admin/:_id",
        element: <EditAdmin />,
      },
    ],
  },
]);

export default router;
