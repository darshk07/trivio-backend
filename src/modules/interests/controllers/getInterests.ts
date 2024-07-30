import { Request, Response } from "express";
import { pc } from "../../../services/db";

export const getInterests = async (req: Request, res: Response) => {
  try {
    const interests = await pc.interest.findMany({
      select: {
        id: true,
        name: true,
        description: true,
      },
    });
    res.send(interests);
  } catch (err) {
    res.status(500).send(err);
  }
};
