import { prisma } from "../../helper/prisma";
import { Itweet } from "../../types/tweet.type";

export const createdTweet = async (data: Itweet) => {
  try {
    const { userId, tweet } = data;

    const tweets = await prisma.tweets.create({
      data: {
        userId,
        tweet,
      },
    });

    return tweets;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
