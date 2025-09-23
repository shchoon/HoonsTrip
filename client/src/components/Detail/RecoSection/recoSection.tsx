"use client";
// import { useQuery } from "@tanstack/react-query";
import ProductSection from "../../ProductSection/ProductSection";
// import type { Activity, Category, Flight, Hotel } from "../../../type";
// import getRecoData from "../../../api/getRecoData";
import type { RecoItem } from "../../../api/fetch/getDetailPageData";

type Props = {
  // category: Category;
  // id: string;
  recoDatas: RecoItem[];
};

export default function RecoSection({ recoDatas }: Props) {
  // const { data } = useQuery<RecoData[]>({
  //   queryKey: ["recoData", category, id],
  //   queryFn: async () => await getRecoData(category, id),
  //   // structuralSharing: true,
  //   staleTime: 60 * 1000,
  // });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {recoDatas && (
        <>
          <ProductSection
            key={recoDatas[0].category}
            category={recoDatas[0].category}
            title={recoDatas[0].title}
            products={recoDatas[0].data}
          />
          <ProductSection
            key={recoDatas[1].category}
            category={recoDatas[1].category}
            title={recoDatas[1].title}
            products={recoDatas[1].data}
          />
        </>
      )}
    </div>
  );
}
