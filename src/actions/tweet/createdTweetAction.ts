import { createdTweet } from "../../repositories/tweets/createdTweet";
import { Itweet } from "../../types/tweet.type";

export const createdTweetAction = async (body: Itweet) => {
  try {
    const tweet = await createdTweet(body);

    return {
      status: 200,
      message: "success",
      data: tweet,
    };
  } catch (error) {
    console.log();
    throw error;
  }
};
