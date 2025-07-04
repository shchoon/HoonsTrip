import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import MainContainer from "./components/Container/MainContainer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3333/activity").then((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <Carousel />
      <MainContainer />
    </>
  );
}

export default App;
