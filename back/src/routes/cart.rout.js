import {Router} from "express";
import CartController from "../controllers/cart.controller.js";

const router = Router();

router.get('/', CartController.getCarts);
router.put('/:id', CartController.changeCount)

export default router;