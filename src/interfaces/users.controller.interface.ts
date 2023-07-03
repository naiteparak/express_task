import { Request, Response } from 'express';

export interface IUsersController {
  getUsers(req: Request, res: Response): Response;
  createUser(req: Request, res: Response): Promise<Response>;
  updateUser(req: Request, res: Response): Promise<Response>;
  updateUserStatus(req: Request, res: Response): Promise<Response>;
  deleteUser(req: Request, res: Response): Promise<Response>;
}
