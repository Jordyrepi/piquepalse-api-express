import { NextFunction, Request, Response } from "express";
import { findAllUserAction } from "../../actions/users/findAllUserAction";

export const findAllUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await findAllUserAction();

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
