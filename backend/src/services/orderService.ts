// // FALTA POR HACER:
// ## CRUD básico

// - [ ]  POST /orders
// - [ ]  PUT /orders/:id

// ## Flujo de estados

// - [ ]  PENDING
// - [ ]  IN_PROGRESS
// - [ ]  APROVAL
// - [ ]  FINISH

// ## Reglas de negocio

// - [ ]  Crear Order_items automáticamente
// - [ ]  Actualizar stock
// - [ ]  Aplicar cupones
// - [ ]  Calcular total del pedido

import prisma from "../prisma/client";
import { Status } from "../generated/prisma/enums";

// ------------------------------------------------------------------------------------------------
// Get orders devuelve todos los pedidos de la base de datos. No recibe parametros.

export const getOrders = async () => {
    const allOrders = await prisma.orders.findMany({
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    })

    return allOrders;
}

// Get orderById devuelve un pedido de la base de datos a partir de su id. Recibe el id como parametro.

export const getOrderById = async ( id: number) => {
    const order = await prisma.orders.findUnique({
        where: { id },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }   
    })

    return order;
}

// ------------------------------------------------------------------------------------------------
// Post createOrder crea un pedido en la base de datos. Recibe los campos del pedido como parametros.

export const createOrder = async (userId: number, status: string , total: number, couponId?: number) => {
    const existingUser = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!existingUser) {
        throw new Error("Usuario no encontrado, cree una cuenta para poder realizar un pedido");
    }
    
    const newOrder = await prisma.orders.create({
        data: {
            userId,
            status,
            total,
            couponId
        }
    })

    return newOrder;
}