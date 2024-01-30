import express from 'express';
import { 
    getSpp,
    getSppById,
    createSpp,
    updateSpp,
    deleteSpp
 } from '../controllers/SppControllers.js'; 

const router = express.Router();


router.get('/spp', getspp);
router.get('/spp/:id', getUserById);
router.post('/spp', createUser);
router.patch('/spp/:id', updateUser);
router.delete('/spp/:id', deleteUser);

export default router;