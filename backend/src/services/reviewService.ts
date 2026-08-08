// FALTA POR HACER:
// - [ ]  POST /products/:id/reviews
// - [ ]  GET /products/:id/reviews
// - [ ]  DELETE /reviews/:id

// ## Reglas de negocio

// - [ ]  Validar puntuación
// - [ ]  Evitar reviews duplicadas

import prisma from "../prisma/client";

// ------------------------------------------------------------------------------------------------
// Get reviews by productId devuelve todas las reviews de un producto a partir de su id. Recibe 
// el productId como parametro.

export const getReviewsByProductId = async (productId: number) => {
    const reviews = await prisma.reviews.findMany({
        where: { productId },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                },
            },
        },
    });

    return reviews;
};

// ------------------------------------------------------------------------------------------------
// Delete reviewById elimina una review a partir de su id. Recibe el reviewId como parametro.

export const deleteReviewByUserAndProduct = async (userId: number, productId: number) => {
    const existingReview = await prisma.reviews.findFirst({
        where: { userId, productId },
    });

    if (!existingReview) {
        throw new Error("La reseña no existe");
    }
    
    const deletedReview = await prisma.reviews.delete({
        where: {id: existingReview.id },
    });

    return deletedReview;
};