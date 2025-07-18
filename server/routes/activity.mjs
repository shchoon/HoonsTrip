import express from "express";
import activityController from "../controllers/activityController.mjs";

const router = express.Router();

router.get("/", activityController);

export default router;
