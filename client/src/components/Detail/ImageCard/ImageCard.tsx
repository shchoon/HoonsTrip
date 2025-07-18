import styled from "styled-components";
import type { Activity, Category, Flight, Hotel } from "../../../type";

const ImageSection = styled.div`
  flex: 1.5;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 18px 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-weight: 700;
  font-size: 26px;
`;

type Props = {
  category: Category;
  data: Flight | Hotel | Activity;
};

type ImageMap = {
  flight: Flight;
  hotel: Hotel;
  activity: Activity;
};

const inferImageType = <C extends keyof ImageMap>(
  category: C,
  data: unknown
): data is ImageMap[C] => {
  return true;
};

export default function ImageCard({ category, data }: Props) {
  return (
    <ImageSection>
      {category === "flight" && inferImageType(category, data) && (
        <FlightImage data={data} />
      )}
      {category == "hotel" && inferImageType(category, data) && (
        <HotelImage data={data} />
      )}
      {category === "activity" && inferImageType(category, data) && (
        <ActivityImage data={data} />
      )}
    </ImageSection>
  );
}

function FlightImage({ data }: { data: Flight }) {
  console.log(data);
  return (
    <>
      <Image src={data.image} alt={data.arrivalCountry} />
      <NameOverlay>{data.arrivalCountry}</NameOverlay>
    </>
  );
}

function HotelImage({ data }: { data: Hotel }) {
  return (
    <>
      <Image src={data.image} alt={data.hotelName} />
      <NameOverlay>{data.hotelName}</NameOverlay>
    </>
  );
}

function ActivityImage({ data }: { data: Activity }) {
  return (
    <>
      <Image src={data.image} alt={data.activityName} />
      <NameOverlay>{data.activityName}</NameOverlay>
    </>
  );
}
