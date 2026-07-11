// Importamos Router de Express para definir un grupo de rutas modular.
import { Router } from "express";
// Importamos los controladores de carrito que manejan cada operación del CRUD.
import {
    addToCartHandler,
    getCartHandler,
    removeFromCartHandler,
} from "../controllers/cartController";

const router = Router();

router.post("/cart/add", addToCartHandler);
router.get("/cart", getCartHandler);
router.delete("/cart/remove/:productId", removeFromCartHandler);
router.put("");

export default router;