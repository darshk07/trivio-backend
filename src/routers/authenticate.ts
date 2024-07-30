import { Router } from "express";
import { sc } from "../services/db";
const router = Router();

router.post("/checkUser", async (req, res) => {
  try {
    const { sessionToken } = req.body;
    if (!sessionToken) {
      return res.status(400).send("Invalid request");
    }

    // Authenticate user here
    const data = await sc.auth.getUser(sessionToken);
    if (data.error) {
      return res.status(data.error.status || 0).send(data);
    } else {
      return res.send(data);
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Invalid request");
    }

    // Authenticate user here
    const user = await sc.auth.signInWithPassword({
      email: "darsh.kejriwal@gmail.com",
      password: "darsh1234",
    });

    console.log(user);
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
