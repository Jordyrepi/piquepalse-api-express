import { NextFunction, Request, Response } from "express";
import { deleteTweetAction } from "../../actions/tweet/deleteTweetAction";

export const deleteTweetController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await deleteTweetAction(Number(id));
    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
