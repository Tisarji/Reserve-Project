import { Router } from 'express';
import * as PositionController from './position.controller';

const router = Router();

router.get('/', PositionController.getAllPositions);
// router.get('/:id', PositionController.getPositionById);
router.post('/', PositionController.createPosition);
router.delete('/:id', PositionController.deletePosition);

export default router;
