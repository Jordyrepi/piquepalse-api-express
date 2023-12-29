import { NextFunction, Request, Response } from "express";
import { getTweetAction } from "../../actions/tweet/getTweetAction";

export const getTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getTweetAction();

  res.status(result.status).send(result);
};
