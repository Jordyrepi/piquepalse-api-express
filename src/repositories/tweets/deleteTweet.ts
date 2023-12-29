import { prisma } from "../../helper/prisma";

export const deleteTweet = async (id: number) => {
  try {
    const deleteTweet = await prisma.tweets.delete({
      where: { id },
    });

    return deleteTweet;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
