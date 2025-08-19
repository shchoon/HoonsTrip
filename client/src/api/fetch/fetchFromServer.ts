type CacheOpt = "no-store" | "force-cache";

export default async function fetchFromServer<T>(
  pathName: string,
  cacheOpt?: CacheOpt
): Promise<T> {
  try {
    const res = await fetch(`http://localhost:3001/${pathName}`, {
      cache: cacheOpt ? cacheOpt : "default", // 필요하면 캐시 설정
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data: T = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
