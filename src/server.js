import express from 'express';
import logger from 'morgan';

const port = 4000;

const app = express();
const loggerMiddleware = logger('dev');
app.use(loggerMiddleware);

const globalRouter = express.Router();

const handleHome = (req, res) => {
  res.send('Home');
};

globalRouter.get('/', handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => {
  res.send('Edit User');
};

userRouter.get('/edit', handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req, res) => {
  res.send('watch Videos');
};

videoRouter.get('/watch', handleWatchVideo);

app.use('/', globalRouter);
app.use('/videos', videoRouter);
app.use('/users', userRouter);

const handleListening = () => {
  console.log(`server listening on ${port}`);
};

app.listen(port, handleListening);
