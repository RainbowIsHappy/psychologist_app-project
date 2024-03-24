//   file ./route/ProductRouter.js
import express from 'express';
import { create, get, list, put, remove } from '../controller/psychoDBController.js';

let router = express.Router();

router.get('/', list);
router.post('/', create);

router.get('/:id', get);
router.put('/:id', put);
router.post('/:id', create);
router.delete('/:id', remove);

router.get('/:id/confirm', get);

export default router; 