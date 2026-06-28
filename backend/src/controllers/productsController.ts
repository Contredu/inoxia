// Importamos los tipos Request y Response de Express para tipar bien req y res.
import { Request, Response } from "express"
// Importamos todas las funciones del servicio de productos que contienen la lógica de BD.
import {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from "../services/productsService"

// ---------- CREATE ----------
// Controlador para registrar un producto nuevo (POST).
export const registerProduct = async (req: Request, res: Response) => {
    try {
        // req.body trae los campos del producto enviados por el cliente en formato JSON.
        // Se los pasamos directamente al servicio que valida y crea el producto.
        const product = await createProduct(req.body)
        // 201 = "Created": respondemos con el producto recién creado.
        res.status(201).json(product)
    } catch (error: any) {
        // Si el servicio lanza un error (ej: producto duplicado), respondemos 400 con el mensaje.
        res.status(400).json({ message: error.message })
    }
}

// ---------- READ (todos) ----------
// Controlador para listar todos los productos (GET).
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        // Pedimos al servicio el arreglo completo de productos.
        const products = await getProducts()
        // 200 = "OK": devolvemos la lista en formato JSON.
        res.status(200).json(products)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

// ---------- READ (uno por id) ----------
// Controlador para obtener un producto por su id (GET con parámetro en la URL).
export const getProductUnique = async (req: Request, res: Response) => {
    try {
        // req.params.id llega como string desde la URL; Number() lo convierte a número para el servicio.
        const id = Number(req.params.id)
        // Buscamos el producto por id.
        const product = await getProductById(id)
        res.status(200).json(product)
    } catch (error: any) {
        // Si no se encuentra, el servicio lanza error y respondemos 404 (no encontrado).
        res.status(404).json({ message: error.message })
    }
}

// ---------- UPDATE ----------
// Controlador para actualizar un producto existente (PUT/PATCH).
export const updateProductData = async (req: Request, res: Response) => {
    try {
        // updateProduct espera UN objeto con el id + los campos a cambiar.
        // Unimos el id de la URL (req.params.id, convertido a número) con el resto del body usando spread (...).
        const update = await updateProduct({ id: Number(req.params.id), ...req.body })
        res.status(200).json(update)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

// ---------- DELETE ----------
// Controlador para eliminar un producto por su id (DELETE).
export const productDelete = async (req: Request, res: Response) => {
    try {
        // Convertimos el id de la URL a número.
        const id = Number(req.params.id)
        // await es importante: esperamos a que la eliminación termine antes de responder.
        const deleted = await deleteProduct(id)
        res.status(200).json({ message: deleted })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}
