import CarouselCom from "../../components/Carousel/Carousel";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // carouselData server component fetching
  const data = await fetch(
    process.env.NEXT_PUBLIC_SERVER_BASEURL + "/carousel",
    {
      cache: "force-cache",
    }
  ).then((res) => res.json());

  const formatData = [...data, ...data.slice(0, 3)];

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
