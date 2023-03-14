import { Router } from 'express';
const userRouter = Router();

// controllers
import { register } from '../controllers/user.controller';

userRouter.post('/register', register);

export default userRouter;