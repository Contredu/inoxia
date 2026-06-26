// Esta página de servicios es donde se configura la comunicación a la base de datos
// es el segundo paso que hay que hacer despues de haber configurado el prisma client y
// el schema.prisma
// aqui trabajamos con PRISMA como hacer las consultas, (lee la documentación) estas funciones luego seran utilizadas para 
// solaparlas con las peticiones de express (los HTTP a través del front).

import prisma from "../prisma/client"
import bcrypt from "bcryptjs";


export const createUser = async ({ email, name, passwordHash }) => {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("Usuario ya registrado.")
    }

    const hashedPassword = await bcrypt.hash(passwordHash, 10)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword,
        }
    })
}


export const getUsers = async () => {
    const allsUser = prisma.user.findMany({
        select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            role: true
        }
    });

    return allsUser;
}

export const getUser = async (id) => {
    const userId = prisma.user.findUnique({
        where: { id }
    })

    if (!userId) {
        throw new Error("Usuario no encontrado")
    } else {
        return userId;
    }
}

export const updateUser = async ({ name, email, lastname, passwordHash, profile_image, creditcard }) => {
    const update = prisma.user.update({
        where: {
            id
        },
        data: {
            name,
            email,
            lastname,
            passwordHash,
            profile_image,
            creditcard

        }
    })
    return update;
} 