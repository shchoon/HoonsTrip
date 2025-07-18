import supabase from "./getSupabase.mjs";

export const getPublicImageUrl = (path) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("images").getPublicUrl(path);
  return publicUrl;
};
