import express from "express";
import activityDetailController from "../controllers/activityDetailController.mjs";

const router = express.Router();

router.get("/", activityDetailController);

export default router;
