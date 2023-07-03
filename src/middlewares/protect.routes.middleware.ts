import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../responses/status-codes';
import { ERROR_MESSAGES } from '../responses/messages';

export const protectRoutesMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): Response<string> | void {
  const apiKey = req.get('api-key');
  if (apiKey !== process.env.API_KEY) {
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .send({ response: ERROR_MESSAGES.UNAUTHORIZED });
  }
  next();
};
