import supabase from "../utils/getSupabase.mjs";
import { getPublicImageUrl } from "../utils/getPublicImageUrl.mjs";

const flightController = async (req, res) => {
  const { id } = req.query;

  let result;
  try {
    // query에 id 있는 경우
    if (id) {
      const { data: flight, error } = await supabase
        .from("flight")
        .select("*")
        .eq("id", id);

      if (error) {
        return res.status(500).json({ error: error.message });
      }

      const [item] = flight;

      result = {
        ...item,
        image: getPublicImageUrl(item.imagePath),
      };

      return res.json(result);
    }
    // query 없는 경우
    const { data: flight, error } = await supabase.from("flight").select("*");

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    result = flight.map((item) => {
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

export default flightController;
