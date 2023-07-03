import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../responses/status-codes';
import { ERROR_MESSAGES } from '../responses/messages';
import { usersService } from '../services/users.service';

export const updateUserMiddleware = function (
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  const { name, age, gender, ...extraFields } = req.body;

  if (
    (name && typeof name !== 'string') ||
    (age && typeof age !== 'number') ||
    (gender && typeof gender !== 'string') ||
    Object.keys(extraFields).length !== 0
  ) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.BAD_REQUEST });
    return;
  }

  if (typeof req.query.id !== 'string') {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.BAD_REQUEST });
    return;
  }

  if (!usersService.getUserById(req.query.id)) {
    res
      .status(STATUS_CODES.BAD_REQUEST)
      .send({ response: ERROR_MESSAGES.USER_ID_ERROR });
    return;
  }

  next();
};
