import express from "express";
import countryInfoController from "../controllers/countryInfoController.mjs";

const router = express.Router();

router.get("/", countryInfoController);

export default router;
