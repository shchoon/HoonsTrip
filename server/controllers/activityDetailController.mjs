import supabase from "../utils/getSupabase.mjs";

const activityDetailController = async (req, res) => {
  const { id } = req.query;
  if (!id) {
    throw Error("id가 존재하지 않습니다");
  }
  try {
    const { data: detail, err } = await supabase
      .from("activityDetail")
      .select("*")
      .eq("id", id);

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const [item] = detail;

    return res.json(item);
  } catch (err) {
    return res.status(500).json({ error: "서버 내부 오류" });
  }
};

export default activityDetailController;
