import express from 'express';
import logger from 'morgan';

import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const port = 4000;

const app = express();
const loggerMiddleware = logger('dev');
app.use(loggerMiddleware);
app.set('view engine', 'pug');

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => {
  console.log(`server listening on ${port}`);
};

app.listen(port, handleListening);
