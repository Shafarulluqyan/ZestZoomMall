import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DetailModal from "../components/DetailModal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDetailModal, setShowDetailModal] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(""); //eslint-disable-line

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleDetailProduct = (product) => {
    setSelectedProduct(product);
    setShowDetailModal(true);
  };

  const handleDeleteProduct = async (_id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure want to delete this stuff?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
      });

      if (result.isConfirmed) {
        const res = await fetch(`http://localhost:3000/products/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            access_token: localStorage.access_token,
          },
        });

        if (!res.ok) {
          const resData = await res.json();
          throw resData;
        }
        fetchProduct();
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: `Success delete product!!!`,
        });
      }
    } catch (err) {
      console.error("Error:", err);
      throw err;
    }
  };

  const handleCloseModal = () => {
    setShowDetailModal(false);
  };

  // untuk format Price
  const formatRupiah = (amount) => {
    if (typeof amount !== "number") {
      return amount; // Jika bukan number, kembalikan nilai asli
    }

    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="mt-10 mx-20 overflow-x-auto">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Product List</h1>
          <Link
            to={"/add-products"}
            className="bg-green-400 px-3 py-2 rounded-lg text-white hover:bg-green-600 mb-3"
          >
            Add Product
          </Link>
        </div>
        <div className="shadow-md sm:rounded-lg">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="max-w-full overflow-x-auto">
              {products.length === 0 ? (
                <p className="text-center text-gray-500 py-4">Table is empty</p>
              ) : (
                <table className="w-full text-sm text-left text-gray-500 bg-white border-b table-auto">
                  <thead className="text-xs text-gray-700 uppercase bg-green-400">
                    <tr>
                      <th className="px-6 py-3">No</th>
                      <th className="px-6 py-3">Product Name</th>
                      <th className="px-6 py-3">Price</th>
                      <th className="px-6 py-3">Size</th>
                      <th className="px-6 py-3">Image</th>
                      <th className="px-6 py-3">Detail</th>
                      <th className="px-6 py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {products?.map((product, idx) => (
                      <tr className="border-b" key={product._id}>
                        <td className="px-6 py-4">{idx + 1}</td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                          {product.name}
                        </td>
                        <td className="px-6 py-4">
                          {formatRupiah(product.price)}
                        </td>
                        <td className="px-6 py-4">{product.size}</td>
                        <td className="px-6 py-4">
                          <img
                            src={product.mainImg}
                            alt={product.name}
                            className="max-w-full h-auto rounded-lg"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleDetailProduct(product)}
                            className="bg-[#11235A] px-3 py-2 rounded-xl  hover:bg-green-600 text-white"
                          >
                            See Detail
                          </button>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Link
                              to={`/edit-product/${product._id}`}
                              className="bg-blue-500 px-3 py-2 rounded-lg text-white hover:bg-blue-900"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() => handleDeleteProduct(product._id)}
                              className="bg-red-500 px-3 py-2 rounded-lg text-white hover:bg-red-900"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
        </div>

        {/* Detail Modal */}
        {showDetailModal && (
          <DetailModal
            handleClose={handleCloseModal}
            product={selectedProduct}
          />
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
