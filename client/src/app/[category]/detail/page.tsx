import DetailCard from "../../../components/Detail/DetailCard";
import { getDetailPageData } from "../../../api/fetch/getDetailPageData";
import { Category } from "../../../type";

import RecoSection from "../../../components/Detail/RecoSection/recoSection";

export default async function DetailPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: Category }>;
  searchParams: Promise<{ [key: string]: "id" | "country" }>;
}) {
  const { category } = await params;
  const { id } = await searchParams;

  const { dataById, informationData } = await getDetailPageData(category, id);

  return (
    <>
      <DetailCard
        category={category}
        dataById={dataById}
        informationData={informationData}
      />
      {/* 추천 항목 */}
      <RecoSection category={category} id={id} />
    </>
  );
}
