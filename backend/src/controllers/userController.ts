// Esta página de controllers es donde se configura la comunicación del frontend al backend
// es el TERCER paso que hay que hacer despues de haber configurado los services de la base de datos.

// aqui trabajamos con EXPRESS como hacer las peticiones del frontend mediante las rutas, (lee la documentación) estas funciones luego seran utilizadas para 
// mostrar mensajes de exito o error de la petición del cliente.

import { Request, Response } from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../services/userService';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllUsers = async (req: Request, res: Response) => {
    const users = await getUsers();
    res.json(users);
};

export const getUserUnique = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id) // Number convierte el id que viene de la URL en string a Int.
        const user = await getUser(id)
        res.status(200).json(user)
    } catch (error: any) {
        res.status(400).json({ message: error })
    }
}

export const UpdateData = async (req: Request, res: Response) => {
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