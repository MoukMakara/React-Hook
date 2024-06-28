import React from "react";
import { Card } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductCard({
  id,
  description,
  qty,
  title,
  image,
  price,
  handleClick
}) {
  // useDispatch to dispatch action to store
  const dispatch = useDispatch();
  function handleAddToCart() {
    dispatch(addToCart({ id, description, qty, title, image, price }));
  }
  return (
    <>
      <Card className="max-w-sm">
        <div>
          <Link to={`products/${id}`}>
            <img
              className="h-[350px] object-cover"
              src={image ? image : "https://dummyimage.com/720x400"}
              alt={title}
            />
          </Link>
        </div>
        <Link to={`/products/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title || "No title"}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {price ? price : "No price"}$
          </span>
          <button
            onClick={() => handleAddToCart()}
            href="#"
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </button>
        </div>
      </Card>
    </>
  );
}