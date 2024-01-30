import express from 'express';
import { 
    get,
    getById,
    create,
    update,
    delete
 } from '../controllers/Controller.js'; 

const router = express.Router();


router.get('/', get);
router.get('//:id', getById);
router.post('/', create);
router.patch('//:id', update);
router.delete('//:id', delete);

export default router;