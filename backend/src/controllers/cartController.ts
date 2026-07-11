import { Request, Response } from "express";
import { Size } from "../generated/prisma/enums";
import { getCart, addToCart, removeFromCart } from "../services/cartService";

export const getCartHandler = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);

    try {
            const cart = await getCart(userId);
        res.json(cart);
    } catch (error: any) {
        res.status(404).json({ error: error.message });
    }
};

export const addToCartHandler = async (req: Request, res: Response) => {
    const { userId, productId, quantity, size } = req.body;

    try {
        const newCartItem = await addToCart({ userId, productId, quantity, size });
        res.status(201).json(newCartItem);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const removeFromCartHandler = async (req: Request, res: Response) => {
    const userId = Number(req.params.userId);
    const productId = Number(req.params.productId);
    const size = req.params.size as Size;   

    try {
        await removeFromCart(userId, productId, size);
        res.status(200).json({ message: "Item removed from cart" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

