import express from 'express';
import { 
    getP,
    getPById,
    createP,
    updateP,
    deleteP
 } from '../controllers/PController.js'; 

const router = express.Router();


router.get('/P', getP);
router.get('/P/:id', getPById);
router.post('/P', createP);
router.patch('/P/:id', updateP);
router.delete('/P/:id', deleteP);

export default router;