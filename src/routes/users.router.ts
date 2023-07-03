import { Router } from 'express';
import { usersController } from '../controllers/users.controller';

export const usersRouter = Router();

usersRouter
  .get('/users', usersController.getUsers)
  .post('/users', usersController.createUser)
  .patch('/users/:id')
  .patch('/users/status/:id')
  .delete('/users/:id');
