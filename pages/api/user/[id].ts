import type { NextApiRequest, NextApiResponse } from "next";
import { User, Error } from "../../../types";
import prisma from "../../../lib/prisma/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Error>
) {
  const { method, query } = req;

  switch (method) {
    case "GET": {
      try {
        const id = parseInt(query?.id as string, 10) - 1;
        const user = await prisma.user.findUnique({ where: { id } });

        if (!user) {
          res.status(404).json({ error: "User not found" });
          return;
        }

        res.status(200).json(user);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching User" });
      }
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
