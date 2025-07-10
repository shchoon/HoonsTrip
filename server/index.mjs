import { write } from "node:fs";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url); //파일의 전체 경로
const __dirname = path.dirname(__filename); // 현재 파일이 위치한 폴더 경로

const server = http.createServer(async (req, res) => {
  //CORS 헤더 추가
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  const parseUrl = new URL(req.url, `http://${req.headers.host}`); // 전체 요청 url 구성
  const pathname = parseUrl.pathname; // 쿼리를 제외한 경로만 추출

  if (pathname.startsWith("/images/")) {
    const imagePath = path.join(__dirname, pathname);
    try {
      const imageData = await fs.readFile(imagePath);
      res.writeHead(200, { "Content-Type": getMimeType(imagePath) });
      res.end(imageData);
    } catch (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Image not found");
    }
    return; // 이미지 처리 후 함수 종료
  }

  if (req.method === "GET") {
    const searchParams = parseUrl.searchParams;

    const files = await fs.readdir(path.join(__dirname, "data")); // data 폴더의 모든 파일 가져오기
    const jsonFiles = files.filter((file) => file.endsWith(".json")); // json 파일들만 가져오기
    const country = searchParams.get("country");
    const flightId = searchParams.get("flight");
    const hotelId = searchParams.get("hotel");
    const activityId = searchParams.get("activity");

    if (pathname === "/") {
      if (country) {
        try {
          const filePath = path.join(__dirname, "data", "CountryInfo.json");
          const content = await fs.readFile(filePath, "utf-8");
          const countryInfo = JSON.parse(content);

          const result = countryInfo.find((info) => info.country === country);

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(result ?? {}));
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Failed to load country data" }));
        }
      } else if (hotelId) {
        try {
          const filePath = path.join(__dirname, "data", "HotelDetail.json");
          const content = await fs.readFile(filePath, "utf-8");
          const detailData = JSON.parse(content);

          const result = detailData.find((data) => data.id === Number(hotelId));

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(result ?? {}));
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ error: "Failed to load hotel detail data" })
          );
        }
      } else if (activityId) {
        try {
          const filePath = path.join(__dirname, "data", "ActivityDetail.json");
          const content = await fs.readFile(filePath, "utf-8");
          const detailData = JSON.parse(content);

          const result = detailData.find(
            (data) => data.id === Number(activityId)
          );

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(result ?? {}));
        } catch (error) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({ error: "Failed to load activity detail data" })
          );
        }
      }
    }

    if (pathname === "/carousel") {
      try {
        const filePath = path.join(__dirname, "data", "Carousel.json");
        const content = await fs.readFile(filePath, "utf-8");
        const carouselData = JSON.parse(content);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(carouselData));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to load carousel data" }));
      }
    }

    // 항공편
    if (pathname === "/flight") {
      try {
        const filePath = path.join(__dirname, "data", "Flight.json");
        const content = await fs.readFile(filePath, "utf-8");
        const flightData = JSON.parse(content);
        let result;
        if (flightId) {
          result = flightData.find((data) => data.id === Number(flightId));
        } else {
          result = flightData;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to load flight data" }));
      }
    }

    // 호텔
    if (pathname === "/hotel") {
      try {
        const filePath = path.join(__dirname, "data", "Hotel.json");
        const content = await fs.readFile(filePath, "utf-8");
        const hotelData = JSON.parse(content);
        let result;
        if (hotelId) {
          result = hotelData.find((data) => data.id === Number(hotelId));
        } else {
          result = hotelData;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to load hotel data" }));
      }
    }

    // 액티비티
    if (pathname === "/activity") {
      try {
        const filePath = path.join(__dirname, "data", "Activity.json");
        const content = await fs.readFile(filePath, "utf-8");
        const activityData = JSON.parse(content);
        let result;
        if (activityId) {
          result = activityData.find((data) => data.id === Number(activityId));
        } else {
          result = activityData;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(result));
      } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Failed to load activity data" }));
      }
    }
  }
});

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase(); // 파일 확장자 추출 (예: '.jpg')

  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  if (ext === ".png") return "image/png";
  if (ext === ".gif") return "image/gif";
  if (ext === ".svg") return "image/svg+xml";
  if (ext === ".webp") return "image/webp";

  return "application/octet-stream"; // 기본 타입
}

server.listen(3333, () => {
  console.log("Server running at http://localhost:3333");
});
