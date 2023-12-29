import { deleteTweet } from "../../repositories/tweets/deleteTweet";

export const deleteTweetAction = async (id: number) => {
  try {
    const deletedTweet = await deleteTweet(id);

    return {
      status: 200,
      message: "deleted success",
      data: deletedTweet,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
