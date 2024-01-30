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
router.get('/kelas/:id', getKelasById);
router.post('/kelas', createKelas);
router.patch('/kelas/:id', updateKelas);
router.delete('/Kelas/:id', deleteKelas);

export default router;