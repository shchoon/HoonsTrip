import { useEffect } from "react";
import styled from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home/Home";
import Page from "./pages/[id]/page";

const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

function App() {
  // useEffect(() => {
  //   fetch("http://localhost:3333/activity").then((res) => console.log(res));
  // }, []);
  return (
    <BrowserRouter>
      <Header />
      <MainContainer>
        <Carousel />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Page />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
