import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import FlightCard from "./components/Card/FlightCard";

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

  return (
    <>
      <Header />
      <Carousel />
      <FlightCard flightData={testData} />
    </>
  );
}

export default App;
