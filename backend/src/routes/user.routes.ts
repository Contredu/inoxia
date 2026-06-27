import { Router } from 'express';
import { registerUser, getAllUsers } from '../controllers/userController';

const router = Router();

router.post('/users/register', registerUser);
router.get('/users', getAllUsers);

export default router;