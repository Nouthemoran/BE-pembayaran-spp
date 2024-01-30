import express from 'express';
import { 
    getSpp,
    getSppById,
    createSpp,
    updateSpp,
    deleteSpp
 } from '../controllers/SppControllers.js'; 

const router = express.Router();


router.get('/', get);
router.get('//:id', getUserById);
router.post('/', createUser);
router.patch('//:id', updateUser);
router.delete('//:id', deleteUser);

export default router;