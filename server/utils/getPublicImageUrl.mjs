import supabase from "./getSupabase.mjs";

export const getPublicImageUrl = (path) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("image").getPublicUrl(path);
  return publicUrl;
};
