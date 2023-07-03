import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../responses/status-codes';
import { ERROR_MESSAGES } from '../responses/messages';

export const checkBodyMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { name, age, gender, ...extraFields } = req.body;

  if (
    typeof name !== 'string' ||
    typeof age !== 'number' ||
    typeof gender !== 'string' ||
    Object.keys(extraFields).length !== 0
  ) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.BAD_REQUEST });
    return;
  }

  next();
};
