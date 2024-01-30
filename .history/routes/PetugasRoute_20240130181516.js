import express from 'express';
import { 
    getPetugas,
    getPetugasById,
    createPetugas,
    updatePetugas,
    deletePetugas
 } from '../controllers/PetugasController.js'; 

const router = express.Router();


router.get('/petugas', getPetugas);
router.get('/petugas/:id', getPetugasById);
router.post('/Petugas', createPetugas);
router.patch('/Petugas/:id', updatePetugas);
router.delete('/Petugas/:id', deletePetugas);

export default router;