import express from "express";
import flightController from "../controllers/flightController.mjs";

const router = express.Router();

router.get("/", flightController);

export default router;
