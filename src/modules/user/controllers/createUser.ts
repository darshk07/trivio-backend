import { Request, Response } from "express";
import { pc } from "../../../services/db";
import { User } from "../type";

export const createUser = async (req: Request, res: Response) => {
  try {
    const userDetails = req.body;
    const interestsId = req.body.interests;

    const user = await pc.user.create({
      data: {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role,
        interests: {
          connect: interestsId.map((id: string) => ({ id })),
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        interests: {
          select: {
            name: true,
          },
        },
      },
    });
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
