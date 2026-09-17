// // FALTA POR HACER:
// ## CRUD básico

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
import { Method, Status } from "../generated/prisma/enums";

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

export const createOrder = async (userId: number, status: Status , total: number, orderNumber: number, paymentMethod: Method, couponId?: number) => {
    const existingUser = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!existingUser) {
        throw new Error("Usuario no encontrado, cree una cuenta para poder realizar un pedido");
    }
    
    const newOrder = await prisma.orders.create({
        data: {
            userId,
            orderNumber,
            total,
            paymentMethod: paymentMethod || "CREDIT_CARD",
            status: "PENDING",
            couponId: couponId || null
        }
    })

    return newOrder;
}

// ------------------------------------------------------------------------------------------------
// Put updateOrder actualiza un pedido en la base de datos. Recibe el id del pedido y los campos a actualizar como parametros.

export const updateOrder = async (id: number, status?: Status, total?: number, paymentMethod?: Method, couponId?: number) => {
    const existingOrder = await prisma.orders.findUnique({
        where: { id }
    })

    if (!existingOrder) {
        throw new Error("Pedido no encontrado");
    }

    const updatedOrder = await prisma.orders.update({
        where: { id },
        data: {
            status: status || existingOrder.status,
            total: total || existingOrder.total,
            paymentMethod: paymentMethod || existingOrder.paymentMethod
        }
    })

    return updatedOrder;
}