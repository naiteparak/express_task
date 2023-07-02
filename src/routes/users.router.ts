import { Request, Response, Router } from 'express';

export const usersRouter = Router();

usersRouter
  .get('/users')
  .post('/users')
  .patch('/users/:id')
  .patch('/users/status/:id')
  .delete('/users/:id');
