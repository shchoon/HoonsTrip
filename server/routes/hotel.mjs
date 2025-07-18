import express from "express";
import hotelController from "../controllers/hotelController.mjs";

const router = express.Router();

router.get("/", hotelController);

export default router;
