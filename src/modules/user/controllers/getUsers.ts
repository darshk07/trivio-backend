import { Request, Response } from "express";
import { pc } from "../../../services/db";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await pc.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        interests: true,
      },
    });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};
