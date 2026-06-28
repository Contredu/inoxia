// Esta página de controllers es donde se configura la comunicación del frontend al backend
// es el TERCER paso que hay que hacer despues de haber configurado los services de la base de datos.

// aqui trabajamos con EXPRESS como hacer las peticiones del frontend mediante las rutas, (lee la documentación) estas funciones luego seran utilizadas para
// mostrar mensajes de exito o error de la petición del cliente.

// Importamos los tipos Request y Response de Express para tipar correctamente req (lo que llega) y res (lo que respondemos).
import { Request, Response } from 'express';
// Importamos las funciones del service de usuarios, que son las que realmente hablan con la base de datos.
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../services/userService';

// ---------- CREATE ----------
// Controlador para registrar un usuario nuevo (POST).
export const registerUser = async (req: Request, res: Response) => {
    try {
        // req.body trae los datos del usuario enviados por el cliente; se los pasamos al service que lo crea.
        const user = await createUser(req.body);
        // 201 = "Created": respondemos con el usuario recién creado.
        res.status(201).json(user);
    } catch (error: any) {
        // Si el service lanza un error (ej: email ya registrado), respondemos 400 con el mensaje.
        res.status(400).json({ message: error.message });
    }
};

// ---------- READ (todos) ----------
// Controlador para listar todos los usuarios (GET).
export const getAllUsers = async (req: Request, res: Response) => {
    // Pedimos al service el listado completo de usuarios.
    const users = await getUsers();
    // Respondemos el arreglo en formato JSON.
    res.json(users);
};

// ---------- READ (uno por id) ----------
// Controlador para obtener un usuario por su id (GET con parámetro en la URL).
export const getUserUnique = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id) // Number convierte el id que viene de la URL en string a Int.
        // Buscamos el usuario por id usando el service.
        const user = await getUser(id)
        res.status(200).json(user)
    } catch (error: any) {
        // Si no se encuentra (o falla), respondemos 400 con el error.
        res.status(400).json({ message: error })
    }
}

// ---------- UPDATE ----------
// Controlador para actualizar un usuario existente (PUT/PATCH).
export const updateData = async (req: Request, res: Response) => {
    try {
        // updateUser espera UN SOLO argumento: un objeto con el id + los campos a actualizar.
        // Por eso unimos el id de la URL (req.params.id) con el resto del body usando spread (...).
        // Number() convierte el id de string (asi llega en la URL) a number, que es lo que pide el servicio.
        const update = await updateUser({ id: Number(req.params.id), ...req.body })
        res.status(200).json(update)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

// ---------- DELETE ----------
// Controlador para eliminar un usuario por su id (DELETE).
export const userDelete = async (req: Request, res: Response) => {
    try {
        // Convertimos el id de la URL a número.
        const id = Number(req.params.id);
        // await es importante: esperamos a que la eliminación termine antes de responder.
        const choosedUser = await deleteUser(id);
        res.status(200).json({ message: `usuario ${id} eliminado` })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
};
