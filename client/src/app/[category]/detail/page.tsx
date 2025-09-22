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
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["recoData"],
  //   queryFn: () => getRecoData(category, id),
  // });
  const { dataById, informationData } = await getDetailPageData(category, id);

  return (
    <>
      <DetailCard
        category={category}
        dataById={dataById}
        informationData={informationData}
      />
      {/* 추천 항목 */}
      {/* <HydrationBoundary state={dehydrate(queryClient)}> */}
      <RecoSection category={category} id={id} />
      {/* </HydrationBoundary> */}
      {/* <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
      </div> */}
    </>
  );
}
