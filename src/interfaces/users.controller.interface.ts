import { Request, Response } from 'express';

export interface IUsersController {
  getUsers(req: Request, res: Response): Promise<Response>;
  createUser(req: Request, res: Response): Promise<Response>;
}
