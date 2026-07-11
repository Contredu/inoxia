// Esta pagina de servicios es donde se configura la comunicacion a la base de datos
// es el segundo paso que hay que hacer despues de haber configurado el prisma client y
// el schema.prisma
// aqui trabajamos con PRISMA como hacer las consultas, (lee la documentacion) estas funciones luego seran utilizadas para
// solaparlas con las peticiones de express (los HTTP a traves del front) en la carpeta Controllers.

// Importamos la instancia de PrismaClient ya configurada para ejecutar consultas a la BD.
import prisma from "../prisma/client";
// Importamos bcrypt para hashear (cifrar) las contrasenas antes de guardarlas. Nunca se guardan en texto plano.
import bcrypt from "bcryptjs";
// Importamos los tipos generados por Prisma. UserCreateInput describe la forma de los datos para crear un usuario.
import { UserCreateInput, UserModel } from "../generated/prisma/models";

// Campos publicos que es seguro devolver al cliente. Nunca incluimos passwordHash ni creditcard aqui.
const publicUserSelect = {
    id: true,
    name: true,
    lastname: true,
    email: true,
    profile_image: true,
    role: true,
};

// ---------- CREATE ----------
// Recibe name y email (que si existen en el modelo) y password como string aparte.
// Usamos "& { password: string }" porque el modelo guarda passwordHash, no "password"; ese campo extra lo anadimos a mano.
export const createUser = async ({ name, email, password }:
    Pick<UserCreateInput, "name" | "email"> & { password: string }
) => {
    // Buscamos si ya hay un usuario con ese email. findUnique funciona aqui porque email es @unique en el schema.
    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    // Si el email ya esta registrado, lanzamos un error para no duplicar usuarios.
    if (existingUser) {
        throw new Error("Usuario ya registrado.")
    }

    // Ciframos la contrasena con bcrypt. El 10 es el "salt rounds": cuantas veces se procesa (mas alto = mas seguro y lento).
    const hashedPassword = await bcrypt.hash(password, 10)
    // Creamos el usuario guardando el hash (no la contrasena original) en el campo passwordHash.
    // "select" limita lo que Prisma devuelve: asi el passwordHash nunca sale de la base de datos hacia la respuesta.
    const user = await prisma.user.create({
        data: {
            name,
            email,
            passwordHash: hashedPassword,
        },
        select: publicUserSelect,
    })
    // Devolvemos el usuario creado (sin passwordHash).
    return user;
}

// ---------- READ (todos) ----------
// Devuelve la lista de todos los usuarios.
export const getUsers = async () => {
    // findMany trae todos los registros. Con "select" elegimos solo campos publicos y NO exponemos passwordHash.
    const allsUser = await prisma.user.findMany({
        select: publicUserSelect,
    });

    // Retornamos la promesa con el listado de usuarios.
    return allsUser;
}

// ---------- READ (uno por id) ----------
// Recibe el id (number) del usuario a buscar.
export const getUser = async (id: number) => {
    // findUnique busca por id, que es la clave primaria (@id) y por tanto unica.
    // "select" evita que passwordHash y creditcard salgan en la respuesta.
    const userId = await prisma.user.findUnique({
        where: { id },
        select: publicUserSelect,
    })

    // Si no se encontro ningun usuario con ese id, avisamos con un error; si existe, lo devolvemos.
    if (!userId) {
        throw new Error("Usuario no encontrado")
    } else {
        return userId;
    }
}

// ---------- UPDATE ----------
// Recibe el id (obligatorio) y de forma opcional los campos editables.
// Partial<Pick<>> hace que todos los campos sean opcionales para poder actualizar solo algunos.
// "& { id: number }" obliga a enviar el id para saber QUE usuario actualizar.
// IMPORTANTE: ya NO se acepta "creditcard" aqui. Guardar un numero de tarjeta tal cual en la base de datos
// (ademas como tipo Int, que ni siquiera puede guardar un numero de 16 digitos completo) es un problema serio
// de seguridad y de cumplimiento (PCI-DSS). Ver el resumen al final del archivo para mas detalle.
export const updateUser = async ({ id, name, email, lastname, passwordHash, profile_image }:
    Partial<Pick<UserCreateInput, "name" | "email" | "lastname" | "passwordHash" | "profile_image">> & { id: number }
) => {
    // update localiza el registro por su id (where) y aplica solo los campos enviados en data.
    // Los campos que lleguen undefined simplemente no se modifican.
    // "select" evita devolver passwordHash y creditcard en la respuesta.
    const update = await prisma.user.update({
        where: {
            id
        },
        data: {
            name,
            email,
            lastname,
            passwordHash,
            profile_image,
        },
        select: publicUserSelect,
    })
    // Devolvemos el usuario ya actualizado (sin passwordHash).
    return update;
}

// ---------- DELETE ----------
// Recibe el id del usuario a eliminar.
export const deleteUser = async (id: number) => {
    // delete elimina el registro cuyo id coincida. Si no existe, Prisma lanza un error.
    const deletedUser = await prisma.user.delete({
        where: {
            id
        },
    });
    // Devolvemos un mensaje de confirmacion con el id eliminado.
    return `Usuario ${id} eliminado correctamente`
}

// ---------------------------------------------------------------------------
// RESUMEN DE CAMBIOS (para que puedas estudiarlo)
// ---------------------------------------------------------------------------
// 1) createUser, getUser y updateUser ahora usan "select: publicUserSelect" en vez de devolver
//    el objeto completo de Prisma. Antes, la respuesta incluia "passwordHash" (el hash de la
//    contrasena) y "creditcard", exponiendo datos sensibles a quien reciba la respuesta HTTP
//    (por ejemplo, se veria en las herramientas de desarrollador del navegador). getUsers ya
//    hacia esto bien, asi que se uso el mismo patron (definido una vez arriba en
//    "publicUserSelect") para mantener consistencia en las 4 funciones.
//
// 2) updateUser ya no acepta ni guarda el campo "creditcard". Guardar un numero de tarjeta de
//    credito en texto plano (y encima como tipo Int, que no puede representar un numero de 16
//    digitos sin desbordarse) va en contra de PCI-DSS (el estandar de seguridad de datos de
//    tarjetas de pago) y expondria a tus usuarios a un riesgo real si la base de datos se
//    filtrara. La alternativa correcta es no tocar nunca el numero de tarjeta desde tu propio
//    backend: se usa una pasarela de pago (Stripe, PayPal, Redsys...) que te da un token, y ese
//    token (nunca el numero real) es lo unico que se guardaria si hiciera falta.
//
// 3) Esto NO modifica schema.prisma (el campo "creditcard" sigue existiendo en el modelo User),
//    solo se dejo de usar en el codigo. Si quieres, en otro momento podemos quitarlo tambien
//    del schema y generar una migracion para eliminarlo de la base de datos.
// ---------------------------------------------------------------------------
