import { NextFunction, Request, Response } from 'express';
import { usersService } from '../services/users.service';
import { STATUS_CODES } from '../responses/status-codes';
import { ERROR_MESSAGES } from '../responses/messages';

export const checkIdMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (
    typeof req.query.id !== 'string' ||
    !usersService.getUserById(req.query.id)
  ) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.USER_ID_ERROR });
    return;
  }

  next();
};
