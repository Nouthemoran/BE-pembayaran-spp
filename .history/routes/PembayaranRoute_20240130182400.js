import express from 'express';
import { 
    getPembayaran,
    getPembayaranById,
    createPembayaran,
    updatePembayaran,
    deletePembayaran
 } from '../controllers/PembayaranController.js'; 

const router = express.Router();


router.get('/pembayaran', getPembayaran);
router.get('/pembayaran/:id', getPembayaranById);
router.post('/Pembayaran', createPembayaran);
router.patch('/Pembayaran/:id', updatePembayaran);
router.delete('/Pembayaran/:id', deletePembayaran);

export default router;