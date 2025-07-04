import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import FlightCard from "./components/Card/FlightCard";
import { useEffect } from "react";

function App() {
  const testData = {
    id: 10,
    airlineName: "Thai Airways",
    airlineLogoUrl: "/images/thai-airways-logo.png",
    departureAirport: "ICN",
    arrivalAirport: "BKK",
    arrivalCountry: "태국",
    outboundDate: "2024-09-12",
    inboundDate: "2024-09-17",
    price: 310000,
    currency: "KRW",
    promotionTag: "특가",
  };

  useEffect(() => {
    fetch("http://localhost:3333/flight").then((res) =>
      console.log(res.json())
    );
  }, []);

  return (
    <>
      <Header />
      <Carousel />
      <FlightCard flightData={testData} />
    </>
  );
}

export default App;
