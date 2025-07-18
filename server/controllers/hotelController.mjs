import supabase from "../utils/getSupabase.mjs";
import { getPublicImageUrl } from "../utils/getPublicImageUrl.mjs";

const hotelController = async (req, res) => {
  const { id } = req.query;
  try {
    let result;

    if (id) {
      // query에 id 있는 경우
      let { data: hotel, error } = await supabase
        .from("hotel")
        .select("*")
        .eq("id", id);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      const [item] = hotel;

      result = {
        ...item,
        image: getPublicImageUrl(item.imagePath),
      };

      return res.json(result);
    }

    // query 없는 경우
    const { data: hotel, error } = await supabase.from("hotel").select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    result = hotel.map((item) => {
      const {
        data: { publicUrl },
      } = supabase.storage.from("images").getPublicUrl(item.imagePath);
      return {
        ...item,
        image: publicUrl,
      };
    });

    return res.json(result);
  } catch (err) {
    return res.status(500).json({ error: "서버 내부 오류" });
  }
};

export default hotelController;
