//   file ./route/ProductRouter.js
import express from 'express';
import { create, get, list, put, remove } from '../controller/articleDBController.js';

let router = express.Router();

router.get('/', list);
router.post('/', create);

router.get('/article', list);
router.post('/article', create);

router.get('/:id', get);
router.put('/:id', put);
router.post('/:id', create);
router.delete('/:id', remove);

router.get('/article/:id', get);
router.put('/article/:id', put);
router.post('/article/:id', create);
router.delete('/article/:id', remove);

export default router; 