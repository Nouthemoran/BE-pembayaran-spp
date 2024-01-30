import express from 'express';
import { 
    getSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
 } from '../controllers/SiswaController.js'; 

const router = express.Router();


router.get('/siswa', getSiswa);
router.get('/siswa/:id', getSiswaById);
router.post('/siswa', createSiswa);
router.patch('/siswa/:id', updateSiswa);
router.delete('/Siswa/:id', deleteSiswa);

export default router;