import express from 'express';
import { 
    getPembay,
    getPembayById,
    createPembay,
    updatePembay,
    deletePembay
 } from '../controllers/PembayController.js'; 

const router = express.Router();


router.get('/Pembay', getPembay);
router.get('/Pembay/:id', getPembayById);
router.post('/Pembay', createPembay);
router.patch('/Pembay/:id', updatePembay);
router.delete('/Pembay/:id', deletePembay);

export default router;