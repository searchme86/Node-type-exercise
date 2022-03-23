import express from 'express';
import { join, login } from '../controllers/userController';
import { home, search } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.route('/').get(home);
globalRouter.route('/join').get(join);
globalRouter.route('/login').get(login);
globalRouter.route('/search').get(search);

export default globalRouter;
