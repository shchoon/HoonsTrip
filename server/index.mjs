import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import carouselRoute from "./routes/carousel.mjs";
import hotelRoute from "./routes/hotel.mjs";
import flightRoute from "./routes/flight.mjs";
import activityRoute from "./routes/activity.mjs";

dotenv.config();

const app = express();
app.use(cors());
const PORT = 3000;

app.use("/carousel", carouselRoute);
app.use("/flight", flightRoute);
app.use("/hotel", hotelRoute);
app.use("/activity", activityRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});
