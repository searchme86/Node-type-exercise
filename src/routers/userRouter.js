import express from 'express';
import { edit, remove, logout, see } from '../controllers/userController';

const userRouter = express.Router();

userRouter.route('./login').get(logout);
userRouter.route('./edit').get(edit);
userRouter.route('./remove').get(remove);
userRouter.route(':id').get(see);

// userRouter.get('./logout', logout);
// userRouter.get('/edit', edit);
// userRouter.get('/remove', remove);
// userRouter.get(':id', see);

export default userRouter;
