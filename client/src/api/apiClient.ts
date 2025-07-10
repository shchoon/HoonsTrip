export const apiClient = async (reqUrl: string) => {
  const res = await fetch("http://localhost:3333" + reqUrl);
  if (!res.ok) {
    throw new Error("api 요청 실패");
  }
  const data = await res.json();

  return data;
};
