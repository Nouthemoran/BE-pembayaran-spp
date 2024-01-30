import express from 'express';
import { 
    getKelas,
    getKelasById,
    createKelas,
    updateKelas,
    deleteKelas
 } from '../controllers/KelasController.js'; 

const router = express.Router();


router.get('/kelas', getKelas);
router.get('/Kelas/:id', getKelasById);
router.post('/Kelas', createKelas);
router.patch('/Kelas/:id', updateKelas);
router.delete('/Kelas/:id', deleteKelas);

export default router;