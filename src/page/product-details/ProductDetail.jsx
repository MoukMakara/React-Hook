import { useLocation } from "react-router-dom";
import ProductDetailCard from "../../components/common/cards/ProductDetailCard";

export function ProductDetail() {
  const location = useLocation();
  const product = location.state;
  // console.log(location.state);

  return (
    <section>
      <ProductDetailCard
        image={product.images[0]}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    </section>
  );
}
