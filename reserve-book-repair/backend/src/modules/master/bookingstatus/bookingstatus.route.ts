import express from "express";
import * as BookingStatusController from "./bookingstatus.controller";

const router = express.Router();

router.get("/", BookingStatusController.getAllBookingStatus);
// router.get("/:id", BookingStatusController.getBookingStatusById);
router.post("/", BookingStatusController.createBookingStatus);
router.delete("/:id", BookingStatusController.deleteBookingStatus);

export default router;
