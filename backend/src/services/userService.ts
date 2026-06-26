// Esta página de servicios es donde se configura la comunicación a la base de datos
// es el segundo paso que hay que hacer despues de haber configurado el prisma client y
// el schema.prisma
// aqui trabajamos con PRISMA como hacer las consultas, (lee la documentación) estas funciones luego seran utilizadas para 
// solaparlas con las peticiones de express (los HTTP a través del front) en la carpeta Controllers.

import prisma from "../prisma/client"
import bcrypt from "bcryptjs";
import { UserCreateInput, UserModel } from "../generated/prisma/models"

export const createUser = async ({ name, email, password }:
    Pick<UserCreateInput, "name" | "email"> & { password: string }
) => {
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        throw new Error("Usuario ya registrado.")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword,
        }
    })
    return user;
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

export const getUser = async (id: number) => {
    const userId = prisma.user.findUnique({
        where: { id }
    })

    if (!userId) {
        throw new Error("Usuario no encontrado")
    } else {
        return userId;
    }
}

export const updateUser = async ({ id, name, email, lastname, passwordHash, profile_image, creditcard }:
    Partial<Pick<UserCreateInput, "name" | "email" | "lastname" | "passwordHash" | "profile_image" | "creditcard">> & { id: number }
) => {
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

export const deleteUser = async (id: number) => {
    const deleteUser = await prisma.user.delete({
        where: {
            id
        },
    });
    return (`Usuario ${id} eliminado correctamente`)
}