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
router.post('/petugas', createPetugas);
router.patch('/petugas/:id', updatePetugas);
router.delete('/Petugas/:id', deletePetugas);

export default router;