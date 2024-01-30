import express from 'express';
import { 
    getSpp,
    getSppById,
    createSpp,
    updateSpp,
    deleteSpp
 } from '../controllers/SppController.js'; 

const router = express.Router();


router.get('/spp', getSpp);
router.get('/spp/:id_spp', getSppById);
router.post('/spp', createSpp);
router.patch('/spp/:id_', updateSpp);
router.delete('/spp/:id', deleteSpp);

export default router;