import express from 'express';
import 'dotenv/config';
import { usersRouter } from './routes/users.router';
import { handleRoutesMiddleware } from './middlewares/handle.routes.middleware';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()).use(usersRouter).use(handleRoutesMiddleware);

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
