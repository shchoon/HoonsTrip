import CarouselCom from "../../components/Carousel/Carousel";
// import { apiClient } from "../../api/apiClient";
// import type { Carousel } from "../../type";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // carouselData server component fetching
  const data = await fetch("http://localhost:3001/carousel", {
    cache: "force-cache",
  }).then((res) => res.json());

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
      <CarouselCom carouselData={data} />
      {children}
    </div>
  );
}
