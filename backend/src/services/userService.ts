// Esta página de servicios es donde se configura la comunicación a la base de datos
// es el segundo paso que hay que hacer despues de haber configurado el prisma client y
// el schema.prisma
// aqui trabajamos con PRISMA como hacer las consultas, (lee la documentación) estas funciones luego seran utilizadas para
// solaparlas con las peticiones de express (los HTTP a través del front) en la carpeta Controllers.

// Importamos la instancia de PrismaClient ya configurada para ejecutar consultas a la BD.
import prisma from "../prisma/client"
// Importamos bcrypt para hashear (cifrar) las contraseñas antes de guardarlas. Nunca se guardan en texto plano.
import bcrypt from "bcryptjs";
// Importamos los tipos generados por Prisma. UserCreateInput describe la forma de los datos para crear un usuario.
import { UserCreateInput, UserModel } from "../generated/prisma/models"

// ---------- CREATE ----------
// Recibe name y email (que sí existen en el modelo) y password como string aparte.
// Usamos "& { password: string }" porque el modelo guarda passwordHash, no "password"; ese campo extra lo añadimos a mano.
export const createUser = async ({ name, email, password }:
    Pick<UserCreateInput, "name" | "email"> & { password: string }
) => {
    // Buscamos si ya hay un usuario con ese email. findUnique funciona aquí porque email es @unique en el schema.
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    // Si el email ya está registrado, lanzamos un error para no duplicar usuarios.
    if (existingUser) {
        throw new Error("Usuario ya registrado.")
    }

    // Ciframos la contraseña con bcrypt. El 10 es el "salt rounds": cuántas veces se procesa (más alto = más seguro y lento).
    const hashedPassword = await bcrypt.hash(password, 10)
    // Creamos el usuario guardando el hash (no la contraseña original) en el campo passwordHash.
    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword,
        }
    })
    // Devolvemos el usuario creado.
    return user;
}

// ---------- READ (todos) ----------
// Devuelve la lista de todos los usuarios.
export const getUsers = async () => {
    // findMany trae todos los registros. Con "select" elegimos solo campos públicos y NO exponemos passwordHash.
    const allsUser = prisma.user.findMany({
        select: {
            id: true,
            name: true,
            lastname: true,
            email: true,
            role: true
        }
    });

    // Retornamos la promesa con el listado de usuarios.
    return allsUser;
}

// ---------- READ (uno por id) ----------
// Recibe el id (number) del usuario a buscar.
export const getUser = async (id: number) => {
    // findUnique busca por id, que es la clave primaria (@id) y por tanto única.
    const userId = prisma.user.findUnique({
        where: { id }
    })

    // Si no se encontró ningún usuario con ese id, avisamos con un error; si existe, lo devolvemos.
    if (!userId) {
        throw new Error("Usuario no encontrado")
    } else {
        return userId;
    }
}

// ---------- UPDATE ----------
// Recibe el id (obligatorio) y de forma opcional los campos editables.
// Partial<Pick<>> hace que todos los campos sean opcionales para poder actualizar solo algunos.
// "& { id: number }" obliga a enviar el id para saber QUÉ usuario actualizar.
export const updateUser = async ({ id, name, email, lastname, passwordHash, profile_image, creditcard }:
    Partial<Pick<UserCreateInput, "name" | "email" | "lastname" | "passwordHash" | "profile_image" | "creditcard">> & { id: number }
) => {
    // update localiza el registro por su id (where) y aplica solo los campos enviados en data.
    // Los campos que lleguen undefined simplemente no se modifican.
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
    // Devolvemos el usuario ya actualizado.
    return update;
}

// ---------- DELETE ----------
// Recibe el id del usuario a eliminar.
export const deleteUser = async (id: number) => {
    // delete elimina el registro cuyo id coincida. Si no existe, Prisma lanza un error.
    const deleteUser = await prisma.user.delete({
        where: {
            id
        },
    });
    // Devolvemos un mensaje de confirmación con el id eliminado.
    return (`Usuario ${id} eliminado correctamente`)
}
