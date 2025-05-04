import { Router } from "express";
import * as BuildingController from "./building.controller";

const router = Router();

router.get("/", BuildingController.getAllBuildings);
// router.get("/:id", BuildingController.getBuildingById);
router.post("/", BuildingController.createBuilding);
router.delete("/:id", BuildingController.deleteBuilding);

export default router;
