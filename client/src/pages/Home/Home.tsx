import ProductSection from "../../components/ProductSection/ProductSection";

import { useProduct } from "../../hook/useProduct";

export default function Home() {
  const { productState, status } = useProduct();

  if (status !== "success") return;

  return (
    <>
      {Object.values(productState).map((product) => {
        return (
          <ProductSection
            id={product.id}
            title={product.title}
            products={product.products}
            loadMore={true}
          />
        );
      })}
    </>
  );
}
