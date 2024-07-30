import { Router } from "express";
import { createUser } from "../modules/user/controllers/createUser";
import { getUsers } from "../modules/user/controllers/getUsers";

const router = Router();

router.post("/", createUser);
router.get("/", getUsers);

export default router;
