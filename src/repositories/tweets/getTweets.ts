import { prisma } from "../../helper/prisma";

export const getTweet = async () => {
  try {
    const tweets = await prisma.tweets.findMany({
      include: {
        User: {
          select: {
            username: true,
            email: true,
          },
        },
      },
    });

    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
