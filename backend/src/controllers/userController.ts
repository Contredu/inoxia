// Esta página de controllers es donde se configura la comunicación del frontend al backend
// es el TERCER paso que hay que hacer despues de haber configurado los services de la base de datos.

// aqui trabajamos con EXPRESS como hacer las peticiones del frontend mediante las rutas, (lee la documentación) estas funciones luego seran utilizadas para 
// mostrar mensajes de exito o error de la petición del cliente.

import { Request, Response } from 'express';
import { createUser, getUsers, getUser, deleteUser } from '../services/userService';

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

// export const getUserUnique = async (req: Request, res: Response) => {
//     try{
//         const user = await getUser(id: number): <Promise{
            
//         };
//         res.status(200).json(user)
//     } catch{
//         res.status(400).json({ message: error})
//     }
// }