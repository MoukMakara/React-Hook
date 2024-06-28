import { useEffect, useState } from "react";
import { BASE_URL } from "../../lib/constant";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function Products() {
  const [products, setProduct] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [showProductModal, setShowProductModal] = useState(false); // separate state for product details modal
  const [showDeleteModal, setShowDeleteModal] = useState(false); // separate state for delete confirmation modal
  const [productToDelete, setProductToDelete] = useState(null); // state to keep track of the product to delete

  useEffect(() => {
    fetch(`${BASE_URL}products`).then((res) =>
      res.json().then((data) => {
        setProduct(data.results);
        console.log(data.results);
      })
    );
  }, []);
  console.log("Products", products);

  // handle view productDetails
  const handleProductDetails = (product) => {
    setProductDetails(product);
    setShowProductModal(true); // show product details modal
    console.log("productDetails view", product);
  };

  // handle delete product
  const handleDeleteProduct = (id) => {
    setProductToDelete(id); // set the product to delete
    setShowDeleteModal(true); // show delete confirm modal
  };

  // confirm delete product
  const confirmDeleteProduct = () => {
    const newProducts = products.filter((product) => product.id !== productToDelete);
    setProduct(newProducts);
    setShowDeleteModal(false); // close delete confirm modal
    console.log("Product deleted", productToDelete);
  };

  // table columns
  const columns = [
    {
      name: "Product Name",
      selector: (row) => row.name,
    },
    {
      name: "Image",
      selector: (row) => (
        <div>
          <img src={row.image} alt={row.name} width={"100"} height={"100"} />
        </div>
      ),
    },
    {
      name: "Price (USD)",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Seller",
      selector: (row) => row.seller,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <button onClick={() => handleProductDetails(row)} className="mr-4 text-xl">
            View
          </button>
          <button onClick={() => handleDeleteProduct(row.id)} className="text-xl text-red-700">
            <MdDelete />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section>
      <DataTable
        columns={columns}
        data={products}
        fixedHeader
        pagination
        pointerOnHover
        highlightOnHover
      />
      {/* Product details modal */}
      <Modal show={showProductModal} onClose={() => setShowProductModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <img
                className="w-80 h-96 object-cover rounded-lg"
                src={
                  productDetails?.image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
                }
                alt=""
              />
            </div>
            <h2>{productDetails?.name || "Unknown"}</h2>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productDetails?.desc}
            </p>
          </div>
        </Modal.Body>
      </Modal>

      {/* Delete confirmation modal */}
      <Modal
        show={showDeleteModal}
        size="md"
        onClose={() => setShowDeleteModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={confirmDeleteProduct}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setShowDeleteModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
