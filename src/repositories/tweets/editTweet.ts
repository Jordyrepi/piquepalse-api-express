import { prisma } from "../../helper/prisma";
import { Itweet } from "../../types/tweet.type";

export const editTweet = async (body: Itweet, id: number) => {
  const { tweet } = body;

  try {
    const result = await prisma.tweets.update({
      where: { id },
      data: { tweet },
    });
    return result;
  } catch (error) {
    console.error();
    throw error;
  }
};
