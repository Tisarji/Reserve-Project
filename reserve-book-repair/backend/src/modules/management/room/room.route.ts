import express from 'express';
import * as RoomController from './room.controller';

const router = express.Router();

router.get('/', RoomController.getRooms);
router.get('/:id', RoomController.getRoomById);
router.post('/', RoomController.createRoom);
router.put('/:id', RoomController.updateRoom);
router.delete('/:id', RoomController.deleteRoom);

export default router;
