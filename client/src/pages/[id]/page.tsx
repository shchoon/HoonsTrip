import { usePageData } from "../../hook/usePageData";
import ProductSection from "../../components/ProductSection/ProductSection";

export default function Page() {
  const { id, isValidId, data, status, title } = usePageData();

  if (!isValidId(id)) {
    return <div>잘못된 경로입니다. URL을 다시 확인해주세요</div>;
  }

  if (status !== "success") return;

  console.log(data);
  return <ProductSection id={id} title={title[id]} products={data} />;
}
