import supabase from "../utils/getSupabase.mjs";

const carouselController = async (req, res) => {
  try {
    let { data: carousel, error: err } = await supabase
      .from("carousel")
      .select("*");

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const result = carousel.map((item) => {
      const {
        data: { publicUrl },
      } = supabase.storage.from("images").getPublicUrl(item.imagePath);

      return {
        ...item,
        image: publicUrl,
      };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "서버 내부 오류" });
  }
};

export default carouselController;
