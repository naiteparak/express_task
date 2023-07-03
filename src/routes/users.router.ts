import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { createUserMiddleware } from '../middlewares/create.user.middleware';
import { updateUserMiddleware } from '../middlewares/update.user.middleware';
import { checkIdMiddleware } from '../middlewares/check.id.middleware';

export const usersRouter = Router();

usersRouter
  .get('/users', usersController.getUsers)
  .post('/users', createUserMiddleware, usersController.createUser)
  .patch('/users', updateUserMiddleware, usersController.updateUser)
  .patch('/users/status', checkIdMiddleware, usersController.updateUserStatus)
  .delete('/users', checkIdMiddleware, usersController.deleteUser);
