import { usePageData } from "../../hook/usePageData";
import ProductSection from "../../components/ProductSection/ProductSection";

export default function Page() {
  const { category, isValidcategory, data, status, title } = usePageData();

  if (!isValidcategory(category)) {
    return <div>잘못된 경로입니다. URL을 다시 확인해주세요</div>;
  }

  if (status !== "success") return;

  return (
    <ProductSection
      category={category}
      title={title[category]}
      products={data}
    />
  );
}
