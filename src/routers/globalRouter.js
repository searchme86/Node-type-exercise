import express from 'express';
import { join, login } from '../controllers/userController';
import { trending } from '../controllers/videoController';

const globalRouter = express.Router();

globalRouter.route('/').get(trending);
globalRouter.route('/join').get(join);
globalRouter.route('/login').get(login);

// globalRouter.get('/', trending);
// globalRouter.get('/join', join);
// globalRouter.get('/login', login);

export default globalRouter;
