"use client";
import { useQuery } from "@tanstack/react-query";
import ProductSection from "../../ProductSection/ProductSection";
import type { Category, RecoData } from "../../../type";
import getRecoData from "../../../api/getRecoData";

type Props = {
  category: Category;
  id: string;
};

export default function RecoSection({ category, id }: Props) {
  const { data } = useQuery<RecoData[]>({
    queryKey: ["recoData", category, id],
    queryFn: async () => await getRecoData(category, id),
    // structuralSharing: true,
    staleTime: 60 * 1000,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {data && (
        <>
          <ProductSection
            key={data[0].category}
            category={data[0].category}
            title={data[0].title}
            products={data[0].data}
          />
          <ProductSection
            key={data[1].category}
            category={data[1].category}
            title={data[1].title}
            products={data[1].data}
          />
        </>
      )}
    </div>
  );
}
