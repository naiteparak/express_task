import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { checkBodyMiddleware } from '../middlewares/check.body.middleware';

export const usersRouter = Router();

usersRouter
  .get('/users', usersController.getUsers)
  .post('/users', checkBodyMiddleware, usersController.createUser)
  .patch('/users')
  .patch('/users/status')
  .delete('/users');
