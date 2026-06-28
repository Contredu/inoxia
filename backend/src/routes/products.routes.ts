// Importamos Router de Express para definir un grupo de rutas modular.
import { Router } from "express";
// Importamos los controladores de productos que manejan cada operación del CRUD.
import {
    registerProduct,
    getAllProducts,
    getProductUnique,
    updateProductData,
    productDelete,
} from "../controllers/productsController";

// Creamos una instancia de Router donde registraremos las rutas de productos.
const router = Router();

// POST /products/register -> crea un producto nuevo (CREATE).
router.post("/products/register", registerProduct);
// GET /products -> devuelve la lista de todos los productos (READ all).
router.get("/products", getAllProducts);
// GET /products/:id -> devuelve un producto por su id (READ one). ":id" es un parámetro dinámico.
router.get("/products/:id", getProductUnique);
// PUT /products/:id -> actualiza un producto existente identificado por id (UPDATE).
router.put("/products/:id", updateProductData);
// DELETE /products/:id -> elimina un producto por su id (DELETE).
router.delete("/products/:id", productDelete);

// Exportamos el router para montarlo en la app principal (index.ts).
export default router;
