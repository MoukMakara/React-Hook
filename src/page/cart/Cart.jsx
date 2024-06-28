import { Card } from "flowbite-react";

import { useSelector } from "react-redux";
import ProductCard from "../../components/common/cards/ProductCard";
import ProductCart from "../../components/common/cards/ProductCart";

export function Cart() {
  const products = useSelector((state) => state.cart.items);
  // show product when click add to cart
  console.log("show product when click add to cart",products);
  return (
    <div className="flex justify-center items-center">
      <Card className="w-1/2">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-3xl font-bold leading-none text-gray-900 dark:text-white">
            Shopping Carts
          </h5>
        </div>
        {products && (
          <div className="overflow-y-auto h-[70vh]">
            {products.map((product, index) => (
              <ProductCart
                key={index}
                image={product.image}
                description={product.description}
                title={product.title}
                price={product.price}
                qty={product.qty}
                id={product.id}
              />
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
