import { NextFunction, Request, Response } from "express";
import { createdTweetAction } from "../../actions/tweet/createdTweetAction";

export const createdTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const result = await createdTweetAction(data);

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
