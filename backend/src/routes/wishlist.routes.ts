import { Router } from "express";
import {
    addToWishlistHandler,
    getWishlistHandler,
    removeFromWishlistHandler,
    updateWishlistItemHandler,
} from "../controllers/wishlistController";

const router = Router();

router.post("/lista_de_Deseos/add", addToWishlistHandler);
router.get("/lista_de_Deseos", getWishlistHandler);
router.delete("/lista_de_Deseos/remove/:userId/:productId", removeFromWishlistHandler);
router.put("/lista_de_Deseos/update/:productId", updateWishlistItemHandler);

export default router;