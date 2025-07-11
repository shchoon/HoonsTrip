import ProductSection from "../../components/ProductSection/ProductSection";

import { useHomeData } from "../../hook/useHomeData";

export default function Home() {
  const { productState, status } = useHomeData();

  if (status !== "success" || !productState) return;

  return (
    <>
      {productState.map((product) => {
        console.log(product);
        return (
          <ProductSection
            category={product.id}
            title={product.title}
            products={product.products}
            loadMore={true}
          />
        );
      })}
    </>
  );
}
