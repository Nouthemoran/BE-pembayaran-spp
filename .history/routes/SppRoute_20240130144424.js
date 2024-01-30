import express from 'express';
import { 
    getSpp,
    getSppById,
    createSpp,
    updateSpp,
    deleteSpp
 } from '../controllers/SppControllers.js'; 

const router = express.Router();


router.get('/spp', getSpp);
router.get('/spp/:id', getSppById);
router.post('/spp', createSpp);
router.patch('/spp/:id', updateSpp);
router.delete('/spp/:id', deleteSpp);

export default router;