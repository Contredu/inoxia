import prisma from "../prisma/client";

// ---------- CREATE ----------
// Recibe userId y productId (numbers) para crear un item de wishlist.
export const createWishlist = async ({ userId, productId }: { userId: number; productId: number }) => {
    // Buscamos si ya existe un wishlist con ese userId y productId.
    const wishlistExisting = await prisma.wishlist.findFirst({
        where: { userId, productId }
    });

    if (!wishlistExisting) {
        // Creamos el nuevo wishlist conectando las relaciones user y product por su id.
        const newWishlist = await prisma.wishlist.create({
            data: {
                user: { connect: { id: userId } },
                product: { connect: { id: productId } },
            }
        });
        // Devolvemos el wishlist creado para que el controller lo envie en la respuesta.
        return newWishlist;
    } else {
        // Ya existe ese producto en el wishlist del usuario: no hay nada que actualizar, lo devolvemos tal cual.
        return wishlistExisting;
    }
};

// ---------- READ (el wishlist de un usuario) ----------
// Recibe el userId (number) del usuario cuyo wishlist queremos consultar.
export const getWishlist = async (userId: number) => {
    // findFirst busca el item del wishlist que coincida con el userId.
    // include: { product: true } trae tambien los datos del producto relacionado.
    const wishlist = await prisma.wishlist.findFirst({
        where: { userId },
        include: {
            product: true,
        },
    });
    // Si no se encontro ningun item para ese usuario, avisamos con un error.
    if (!wishlist) {
        throw new Error("Wishlist no encontrado");
    }
    // Devolvemos el wishlist encontrado.
    return wishlist;
};

// ---------- DELETE (eliminar un item del wishlist) ----------
export const removeFromWishlist = async (userId: number, productId: number) => {
    // Buscamos si el usuario ya tiene ese producto en el wishlist (mismo userId y productId).
    const existingWishlistItem = await prisma.wishlist.findFirst({
        where: { userId, productId },
    });
    if (!existingWishlistItem) {
        throw new Error("El producto no está en el wishlist");
    }
    // Si el producto está en el wishlist, lo eliminamos.
    const deletedWishlistItem = await prisma.wishlist.delete({
        where: { id: existingWishlistItem.id },
    });
    return deletedWishlistItem;
}
