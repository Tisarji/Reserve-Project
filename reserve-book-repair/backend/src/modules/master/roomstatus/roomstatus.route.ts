import { Router } from 'express';
import * as RoomStatusController from './roomstatus.controller';

const router = Router();

router.get('/', RoomStatusController.getAllRoomStatus);
// router.get('/:id', RoomStatusController.getRoomStatusById);
router.post('/', RoomStatusController.createRoomStatus);
router.delete('/:id', RoomStatusController.deleteRoomStatus);

export default router;
