import express from "express";
import hotelDetailController from "../controllers/hotelDetailController.mjs";

const router = express.Router();

router.get("/", hotelDetailController);

export default router;
