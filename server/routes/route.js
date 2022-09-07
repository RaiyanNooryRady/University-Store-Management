import express from 'express';
import { addItem,getItems,getItem, editItem,deleteItem } from '../controller/item-controller.js';

const router = express.Router();

router.post('/add',addItem);
router.get('/all',getItems);
router.get('/:id',getItem);
router.put('/:id',editItem);
router.delete('/:id',deleteItem);

export default router;