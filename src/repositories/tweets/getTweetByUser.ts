import { prisma } from "../../helper/prisma";
import { Itweet } from "../../types/tweet.type";

export const getTweetByUser = async (userId: number) => {
  try {
    const getTweet = await prisma.tweets.findMany({
      where: {
        userId,
      },
      include: {
        User: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return getTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
