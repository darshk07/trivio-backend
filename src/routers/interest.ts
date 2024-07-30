import { Router } from "express";
import { getInterests } from "../modules/interests/controllers/getInterests";
const router = Router();

router.get("/", getInterests);

export default router;
