// FALTA POR HACER:
// - [ ]  UPDATE Valorar la posibilidad de modificar una review.

// ## Reglas de negocio

// - [ ]  Validar puntuación


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

// ------------------------------------------------------------------------------------------------
// Create review crea una review a partir de los datos recibidos. Recibe el userId, productId, rating y comment como parametros.

export const createReview = async (userId: number, productId:number, rating: number, comment:string) =>{
    const existingReview = await prisma.reviews.findFirst({
        where: { userId, productId }
    });

    if (existingReview) {
        throw new Error("Ya has reseñado este producto");
    }

    const newReview = await prisma.reviews.create({
        data: {
            userId,
            productId,
            rating,
            comment
        }
    });

    return newReview;
};