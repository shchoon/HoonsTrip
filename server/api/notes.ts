import supabase from "../utils/getSupabase.mjs";

export async function getCarouselImg() {
  const { data: carousel, error: err } = await supabase
    .from("carousel")
    .select("*");

  if (!carousel) throw new Error("Failed to fetch carousel data");

  const result = carousel.map((item) => {
    const {
      data: { publicUrl },
    } = supabase.storage.from("images").getPublicUrl(item.imagePath);

    return {
      ...item,
      image: publicUrl,
    };
  });

  return result;
}
