import express from 'express';
import * as DepartmentController from './department.controller';

const router = express.Router();

router.get('/', DepartmentController.getDepartments);
// router.get('/:id', DepartmentController.getDepartmentById);
router.post('/', DepartmentController.createDepartment);
router.delete('/:id', DepartmentController.deleteDepartment);

export default router;
