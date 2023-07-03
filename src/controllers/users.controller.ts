import { Request, Response } from 'express';
import { IUsersController } from '../interfaces/users.controller.interface';
import { usersService } from '../services/users.service';
import { STATUS_CODES } from '../responses/status-codes';

class UserController implements IUsersController {
  async getUsers(req: Request, res: Response): Promise<Response> {
    const users = await usersService.getUsers();
    return res.status(STATUS_CODES.OK).send({ response: users });
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    const newUser = await usersService.createUser(userData);
    return res.status(STATUS_CODES.CREATED).send({ response: newUser });
  }
}

export const usersController = new UserController();
