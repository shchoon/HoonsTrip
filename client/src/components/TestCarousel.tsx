import { getCarouselImg } from "@server/api/notes";

export default async function TestCarousel() {
  const data = await getCarouselImg();

  return <h2>{data.length}</h2>;
}
