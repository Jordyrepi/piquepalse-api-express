import { getTweet } from "../../repositories/tweets/getTweets";

export const getTweetAction = async () => {
  try {
    const tweets = await getTweet();

    return {
      status: 200,
      message: "succes",
      data: tweets,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
