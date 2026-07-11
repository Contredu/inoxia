import { Request, Response } from "express";
import { createWishlist, getWishlist, removeFromWishlist } from "../services/wishlistService";

export const addToWishlistHandler = async (req: Request, res: Response) => {
    const { userId, productId } = req.body;

    try {
        const newWishlistItem = await createWishlist({ userId, productId });
        res.status(201).json(newWishlistItem);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const getWishlistHandler = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);

    try {
        const wishlist = await getWishlist(userId);
        res.json(wishlist);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}

export const removeFromWishlistHandler = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const productId = Number(req.params.productId);

    try {
        const deletedItem = await removeFromWishlist(userId, productId);
        res.json(deletedItem);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
}

export const updateWishlistItemHandler = async (req: Request, res: Response) => {
    // El modelo Wishlist solo relaciona user y product, no tiene otros campos editables,
    // asi que "actualizar" equivale a asegurar que el item exista (misma logica que crear).
    const { userId, productId } = req.body;

    try {
        const wishlistItem = await createWishlist({ userId, productId });
        res.status(200).json(wishlistItem);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
