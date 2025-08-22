import type {
  Activity,
  Category,
  Hotel,
  Flight,
  CountryInfo,
  HotelDetail,
  ActivityDetail,
} from "../../type";
import fetchFromServer from "./fetchFromServer";

const fetchDetailMap: Record<Category, string> = {
  flight: `country?country=`,
  hotel: `hotelDetail?id=`,
  activity: `activityDetail?id=`,
};

const categoryTitleMap: Record<Category, string> = {
  flight: "이런 항공편은 어떠세요?",
  hotel: "이런 호텔은 어떠세요?",
  activity: "이런 액티비티는 어떠세요?",
  //   새로운 카테고리 추가시 알맞게 항목 추가
};

const categoryMap: Category[] = ["flight", "hotel", "activity"];

export const getDetailPageData = async (category: Category, id: string) => {
  const dataById = await fetchFromServer<Flight | Hotel | Activity>(
    category + "?id=" + id
  );

  const country = dataById.country;

  const detailQuery = category === "flight" ? country : id;

  const informationData = await fetchFromServer<
    CountryInfo | HotelDetail | ActivityDetail
  >(fetchDetailMap[category] + detailQuery);

  const recoData = await Promise.all(
    categoryMap
      .filter((item) => item !== category)
      .map(async (item) => {
        const res = await fetchFromServer<Flight[] | Hotel[] | Activity[]>(
          item
        );
        const data = res.filter((el) => el.country === country) as
          | Flight[]
          | Hotel[]
          | Activity[];

        return {
          category: item,
          title: categoryTitleMap[category],
          data: data,
        };
      })
  );

  return {
    dataById: dataById,
    informationData: informationData,
    recoData: recoData,
  };
};
