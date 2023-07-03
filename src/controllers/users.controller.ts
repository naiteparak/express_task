import { Request, Response } from 'express';
import { IUsersController } from '../interfaces/users.controller.interface';
import { usersService } from '../services/users.service';
import { STATUS_CODES } from '../responses/status-codes';
import { createUserDto } from '../interfaces/user.interface';

class UserController implements IUsersController {
  getUsers(req: Request, res: Response): Response {
    const users = usersService.getUsers();
    return res.status(STATUS_CODES.OK).send({ response: users });
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData: createUserDto = req.body;
    const newUser = await usersService.createUser(userData);
    return res.status(STATUS_CODES.CREATED).send({ response: newUser });
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const updatedUser = await usersService.updateUser(
      req.query.id as string,
      req.body,
    );
    return res.status(STATUS_CODES.OK).send({ response: updatedUser });
  }

  async updateUserStatus(req: Request, res: Response): Promise<Response> {
    const updatedUser = await usersService.updateUserStatus(
      req.query.id as string,
    );
    return res.status(STATUS_CODES.OK).send({ response: updatedUser });
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    return res.status(STATUS_CODES.NO_CONTENT);
  }
}

export const usersController = new UserController();
