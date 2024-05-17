import { PrismaClient } from "@prisma/client";
import { customAlphabet } from "nanoid";
import { ALPHABET } from "../consts";

export const createLink = async (db: PrismaClient) => {
  const linksCount = await db.link.count({
    where: {
      expirationDate: {
        gte: new Date(),
      },
    },
  });

  const nanoid = customAlphabet(ALPHABET, 4 + Math.floor(linksCount / 1000));

  let generatedLink = nanoid();

  while (await db.link.findUnique({ where: { shortLink: generatedLink } })) {
    generatedLink = nanoid();
  }

  return generatedLink;
};
