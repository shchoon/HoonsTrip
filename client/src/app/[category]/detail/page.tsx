import DetailCard from "../../../components/Detail/DetailCard";
import ProductSection from "../../../components/ProductSection/ProductSection";
import { getDetailPageData } from "../../../api/fetch/getDetailPageData";
import { Category } from "../../../type";

export default async function DetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: Category }>;
  searchParams: Promise<{ [key: string]: "id" | "country" }>;
}) {
  const { category } = await params;
  const { id } = await searchParams;

  const { dataById, informationData, recoData } = await getDetailPageData(
    category,
    id
  );

  return (
    <>
      <DetailCard
        category={category}
        dataById={dataById}
        informationData={informationData}
      />
      {/* 추천 항목 */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {recoData.map((data) => {
          return (
            <ProductSection
              key={data.category}
              category={data.category}
              title={data.title}
              products={data.data}
            />
          );
        })}
      </div>
    </>
  );
}
