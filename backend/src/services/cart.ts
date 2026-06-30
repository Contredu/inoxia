// Importamos los tipos generados por Prisma para el modelo Cart_items.
// Cart_itemsCreateInput describe la forma de los datos que Prisma espera al crear un item del carrito.
import { Cart_itemsCreateInput } from "../generated/prisma/models";
// Importamos la instancia de PrismaClient ya configurada para hacer las consultas a la BD.
import prisma from "../prisma/client";

// ---------- READ (el carrito de un usuario) ----------
// Recibe el userId (number) del usuario cuyo carrito queremos consultar.
export const getCart = async (userId: number) => {
    // findFirst busca el item del carrito que coincida con el userId.
    // include: { product: true } trae tambien los datos del producto relacionado.
    const cart = await prisma.cart_items.findFirst({
        where: { userId },
        include: {
            product: true,
        },
    });

    // Si no se encontro ningun item para ese usuario, avisamos con un error.
    if (!cart) {
        throw new Error("Carrito no encontrado");
    }

    // Devolvemos el carrito encontrado.
    return cart;
};

// ---------- CREATE / UPDATE (agregar al carrito) ----------
// Recibe los campos necesarios para agregar un producto. Usamos Pick<> sobre Cart_itemsCreateInput
// para quedarnos solo con los campos que el cliente debe enviar (no relaciones completas).
export const addToCart = async ({ userId, productId, quantity, size }:
    Pick<Cart_itemsCreateInput, "size" | "quantity"> & { userId: number; productId: number }
) => {
    // Buscamos si el usuario ya tiene ese producto en el carrito (mismo userId y productId).
    const existingCartItem = await prisma.cart_items.findFirst({
        where: { userId, productId },
    });

    if (existingCartItem) {
        // Si el producto ya esta en el carrito, actualizamos la cantidad.
        // Usamos userId en el where porque es la clave unica (@id) del modelo Cart_items.
        const updatedCartItem = await prisma.cart_items.update({
            where: { userId: existingCartItem.userId },
            // Sumamos la nueva cantidad a la existente y, si llega un tamano nuevo, lo aplicamos.
            data: { quantity: existingCartItem.quantity + quantity, size: size ?? existingCartItem.size },
        });
        return updatedCartItem;
    } else {
        // Si el producto no esta en el carrito, lo agregamos.
        const newCartItem = await prisma.cart_items.create({
            data: {
                quantity,
                size: size ?? 0, // Tamano por defecto (size es Int en el schema), puedes cambiarlo segun tus necesidades.
                // Conectamos las relaciones obligatorias user y product por su id.
                user: { connect: { id: userId } },
                product: { connect: { id: productId } },
            },
        });
        return newCartItem;
    }
};

// ---------- DELETE (quitar del carrito) ----------
// Recibe el userId y productId del item a eliminar (size queda disponible por si lo necesitas filtrar).
export const removeFromCart = async (userId: number, productId: number, size: number) => {
    // Buscamos el item del carrito que coincida con el usuario y el producto.
    const existingCartItem = await prisma.cart_items.findFirst({
        where: { userId, productId, size },
    });

    // Si no existe, avisamos con un error.
    if (!existingCartItem) {
        throw new Error("Producto no encontrado en el carrito");
    }

    // Eliminamos usando userId, que es la clave unica (@id) del modelo Cart_items.
    await prisma.cart_items.delete({
        where: { userId: existingCartItem.userId },
    });

    // Devolvemos un mensaje de confirmacion.
    return { message: "Producto eliminado del carrito" };
};
