import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { createUserMiddleware } from '../middlewares/create.user.middleware';
import {
  updateUserMiddleware,
  updateUserStatusMiddleware,
} from '../middlewares/update.user.middleware';

export const usersRouter = Router();

usersRouter
  .get('/users', usersController.getUsers)
  .post('/users', createUserMiddleware, usersController.createUser)
  .patch('/users', updateUserMiddleware, usersController.updateUser)
  .patch(
    '/users/status',
    updateUserStatusMiddleware,
    usersController.updateUserStatus,
  )
  .delete('/users', usersController.deleteUser);
