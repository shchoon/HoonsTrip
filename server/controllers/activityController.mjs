import supabase from "../utils/getSupabase.mjs";
import { getPublicImageUrl } from "../utils/getPublicImageUrl.mjs";

const activityController = async (req, res) => {
  const { id } = req.query;

  try {
    let result;

    // query에 id 있는 경우
    if (id) {
      const { data: activity, error: err } = await supabase
        .from("activity")
        .select("*")
        .eq("id", id);

      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const [item] = activity;

      result = {
        ...item,
        image: getPublicImageUrl(item.imagePath),
      };

      return res.json(result);
    }

    // query 없는 경우
    const { data: activity, error: err } = await supabase
      .from("activity")
      .select("*");

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    result = activity.map((item) => {
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

export default activityController;
