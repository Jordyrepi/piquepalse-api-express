import { NextFunction, Request, Response } from "express";
import { editTweetAction } from "../../actions/tweet/editTweetAction";

export const editTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = parseInt(req.params.id);
  try {
    const result = await editTweetAction(id, req.body);
    res.status(result.status).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
