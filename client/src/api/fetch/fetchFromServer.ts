type CacheOpt = "no-store" | "force-cache";

export default async function fetchFromServer<T>(
  pathName: string,
  cacheOpt?: CacheOpt
): Promise<T> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASEURL}/${pathName}`,
      {
        cache: cacheOpt ? cacheOpt : "default", // 필요하면 캐시 설정
      }
    );

    if (!res.ok) {
      if (res.status !== 304) {
        throw new Error(`Failed to fetch data with status: ${res.status}`);
      }
    }

    const data: T = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw error;
  }
}
