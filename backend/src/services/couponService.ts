// FALTA POR HACER:

// ## Reglas de negocio

// - [ ]  Validar fecha de expiración
// - [ ]  Validar porcentaje de descuento
// - [ ]  Validar disponibilidad del cupón

import prisma from "../prisma/client";

// ------------------------------------------------------------------------------------------------

// Campos publicos que es seguro devolver al cliente. Nunca incluimos passwordHash ni creditcard aqui.
const publicCouponSelect = {
    id: true,
    code: true,
    type: true,
    value: true,
    maxUses: true,
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

// Post createCoupon crea un cupon en la base de datos. Recibe los campos del cupon como parametros.
export const createCoupon = async (code: string, couponType: string, value: number, maxUses: number, expiresAt: Date
) => {
    if (!code || code.trim().length === 0) {
        throw new Error("El código del cupón es obligatorio.");
    }

    if (!couponType || couponType.trim().length === 0) {
        throw new Error("El tipo de cupón es obligatorio.");
    }

    if (value <= 0) {
        throw new Error("El valor del cupón debe ser mayor a 0.");
    }

    if (!Number.isInteger(maxUses) || maxUses <= 0) {
        throw new Error("El campo maxUses debe ser un número entero mayor a 0.");
    }

    if (!(expiresAt instanceof Date) || Number.isNaN(expiresAt.getTime())) {
        throw new Error("expiresAt debe ser una fecha válida.");
    }

    if (expiresAt <= new Date()) {
        throw new Error("La fecha de expiración debe ser una fecha futura.");
    }

    const existingCoupon = await prisma.coupons.findUnique({
        where: { code },
    });

    if (existingCoupon) {
        throw new Error("Cupón ya registrado.");
    }

    const coupon = await prisma.coupons.create({
        data: {
            code,
            type: couponType,
            value,
            maxUses,
            expiresAt,
        } as any,
        select: publicCouponSelect,
    });

    return coupon;
}

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