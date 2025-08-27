import CarouselCom from "../../components/Carousel/Carousel";
// import { apiClient } from "../../api/apiClient";
// import type { Carousel } from "../../type";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // carouselData server component fetching
  const data = await fetch(process.env.SERVER_BASEURL + "/carousel", {
    cache: "force-cache",
  }).then((res) => res.json());

  const formatData = [...data, ...data.slice(0, 3)];
  console.log(formatData);
  return (
    <div
      style={{
        marginTop: 80,
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        alignItems: "center",
      }}
    >
      <CarouselCom carouselData={formatData} />
      {children}
    </div>
  );
}
