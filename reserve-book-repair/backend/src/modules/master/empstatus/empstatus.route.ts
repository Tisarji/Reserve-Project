import express from 'express';
import * as empStatusController from './empstatus.controller';

const router = express.Router();

router.get('/', empStatusController.getAllEmpStatus);
// router.get('/:id', empStatusController.getEmpStatusById);
router.post('/', empStatusController.createEmpStatus);
router.delete('/:id', empStatusController.deleteEmpStatus);

export default router;
