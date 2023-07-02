import express from 'express';
import 'dotenv/config';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.listen(port, (): void => {
  console.log(`Server running on port ${port}`);
});
