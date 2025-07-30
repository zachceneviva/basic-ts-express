import express from 'express';
import morgan from 'morgan';

const app = express();
const apiRouter = express.Router();

app.use(express.json());
app.use(morgan('[:date[iso]] :method :url :status - :response-time ms'));

apiRouter.get('/', (_, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use('/api', apiRouter);

export default app;
