import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home/Home";
import Page from "./pages/[id]/page";
import DetailPage from "./pages/[id]/detail/page";
import Test from "./pages/Test";

const MainContainer = styled.div`
  margin-top: 80px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

function App() {
  const locataion = useLocation();
  const isShowModal =
    locataion.pathname === "/" ||
    /^\/(flight|hotel|activity)$/.test(location.pathname);
  useEffect(() => {
    fetch("http://localhost:3333/flight?flight=1").then((res) =>
      console.log(res)
    );
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        {isShowModal && <Carousel />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Page />} />
          <Route path=":id/detail" element={<DetailPage />} />
          <Route path="/test" element={<Test />} />
          {/* 중첩 라우트 */}
        </Routes>
      </MainContainer>
    </>
  );
}

export default App;
