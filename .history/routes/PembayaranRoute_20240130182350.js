import express from 'express';
import { 
    getPembayaran,
    getPembayaranById,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
 } from '../controllers/PembayaranController.js'; 

const router = express.Router();


router.get('/Pembayaran', getPembayaran);
router.get('/Pembayaran/:id', getPembayaranById);
router.post('/Pembayaran', createPembayaran);
router.patch('/Pembayaran/:id', updatePembayaran);
router.delete('/Pembayaran/:id', deletePembayaran);

export default router;