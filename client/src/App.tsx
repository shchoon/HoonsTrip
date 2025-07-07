import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3333/activity").then((res) => console.log(res));
  }, []);
  return (
    <>
      <Header />
      <Carousel />
      <Home />
    </>
  );
}

export default App;
