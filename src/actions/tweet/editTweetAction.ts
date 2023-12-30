import { editTweet } from "../../repositories/tweets/editTweet";
import { Itweet } from "../../types/tweet.type";

export const editTweetAction = async (id: number, body: Itweet) => {
  try {
    const expense = await editTweet(body, id);

    return {
      status: 200,
      message: " Update success guyss",
      data: expense,
    };
  } catch (error) {
    console.error();
    throw error;
  }
};
