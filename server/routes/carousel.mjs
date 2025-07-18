import express from "express";
import carouselController from "../controllers/carouselController.mjs";

const router = express.Router();

router.get("/", carouselController);

export default router;
