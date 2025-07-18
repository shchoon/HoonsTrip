import supabase from "../utils/getSupabase.mjs";

const countryInfoController = async (req, res) => {
  const { country } = req.query;

  if (!country) {
    throw Error("country가 존재하지 않습니다");
  }

  try {
    const { data: countryInfo, err } = await supabase
      .from("countryInfo")
      .select("*")
      .eq("country", country);

    if (err) {
      return res.status(500).json({ error: err.message });
    }

    const [item] = countryInfo;

    return res.json({ ...item });
  } catch (err) {
    return res.status(500).json({ error: "서버 내부 오류" });
  }
};

export default countryInfoController;
