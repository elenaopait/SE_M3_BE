import { Router } from 'express';
const itemRouter = Router();

// controllers
import { register } from '../controllers/itemLab.controller';

itemRouter.post('/register', register);

export default itemRouter;