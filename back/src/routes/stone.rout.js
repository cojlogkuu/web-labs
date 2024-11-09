import {Router} from "express";
import StoneController from "../controllers/stone.controller.js";

const router = Router();

router.get('/', StoneController.getStones)
router.get('/:id', StoneController.getStoneById)

export default router;