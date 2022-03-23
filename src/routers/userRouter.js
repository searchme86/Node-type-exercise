import express from 'express';
import { edit, remove, logout, see } from '../controllers/userController';

const userRouter = express.Router();

userRouter.route('./login').get(logout);
userRouter.route('./edit').get(edit);
userRouter.route('./remove').get(remove);
userRouter.route(':id').get(see);

export default userRouter;
