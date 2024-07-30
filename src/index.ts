import express, { Request, Response } from "express";
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
import userRouter from "./routers/user";
import authenticateRouter from "./routers/authenticate";
import interestRouter from "./routers/interest";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/authenticate", authenticateRouter);
app.use("/api/templates/interests", interestRouter);

app.get("/", async (req: Request, res: Response) => {
  res.send("Success");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
