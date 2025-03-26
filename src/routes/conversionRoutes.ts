import { Router } from "express";
import { getConversionRate } from "../controllers/conversionController";

const router = Router();

router.get("/conversion-rate", getConversionRate);

export default router;
