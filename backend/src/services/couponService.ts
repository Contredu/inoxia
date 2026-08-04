// FALTA POR HACER:

// GET /coupons/:code

// ## Reglas de negocio

// - [ ]  Validar fecha de expiración
// - [ ]  Validar porcentaje de descuento
// - [ ]  Validar disponibilidad del cupón

import prisma from "../prisma/client";
import { CouponsCreateInput } from "../generated/prisma/models";

// ------------------------------------------------------------------------------------------------

// Campos publicos que es seguro devolver al cliente. Nunca incluimos passwordHash ni creditcard aqui.
const publicCouponSelect = {
    id: true,
    code: true,
    discount: true,
    expiresAt: true,
}

// ------------------------------------------------------------------------------------------------

// getCoupons devuelve todos los cupones de la base de datos. No recibe parametros.
export const getCoupons = async () => {
    const allCoupons = await prisma.coupons.findMany({
        select: publicCouponSelect,
    });

    return allCoupons;
}

// getCouponByCode devuelve un cupon de la base de datos a partir de su codigo. Recibe el codigo como parametro.
export const getCouponByCode = async (code: string) => {
    const coupon = await prisma.coupons.findUnique({
        where: { code },
        select: publicCouponSelect,
    });

    if (!coupon) {
        throw new Error("Cupon no encontrado");
    } else {
        return coupon;
    }
} 

// ------------------------------------------------------------------------------------------------

// Post createCoupon crea un cupon en la base de datos. Recibe un objeto con los campos del cupon como parametro.
// export const createCoupon = async ( code: string, value: number, expiresAt: Date ) => {
//     // Buscamos si ya hay un cupon con ese codigo. findUnique funciona aqui porque code es @unique en el schema.
//     const existingCoupon = await prisma.coupons.findUnique({
//         where: { code },
//     });

//     // Si el codigo ya esta registrado, lanzamos un error para no duplicar cupones.
//     if (existingCoupon) {
//         throw new Error("Cupon ya registrado.");
//     }

//     // Creamos el cupon en la base de datos.
//     const coupon = await prisma.coupons.create({
//         data: {
//             code,
//             type,
//             value,
//             maxUses,
//             expiresAt
//         },
//         select: publicCouponSelect,
//     });

//     return coupon;
// }

// ------------------------------------------------------------------------------------------------

// deleteCouponByCode elimina un cupon de la base de datos a partir de su codigo. Recibe el codigo como parametro.
export const deleteCouponByCode = async (code: string) => {
    // Buscamos si existe un cupon con ese codigo.
    const existingCoupon = await prisma.coupons.findUnique({
        where: { code },
    });

    // Si no existe, lanzamos un error.
    if (!existingCoupon) {
        throw new Error("Cupon no encontrado.");
    }

    // Eliminamos el cupon de la base de datos.
    await prisma.coupons.delete({
        where: { code },
    });

    return { message: "Cupon eliminado correctamente." };
}