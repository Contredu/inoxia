// Importamos los tipos generados por Prisma para el modelo Product.
// ProductCreateInput describe la forma de los datos que Prisma espera al crear un producto.
import { ProductCreateInput } from "../generated/prisma/models"
// Importamos la instancia de PrismaClient ya configurada para hacer las consultas a la BD.
import prisma from "../prisma/client"

// ---------- CREATE ----------
// Recibe los campos necesarios para crear un producto. Usamos Pick<> sobre ProductCreateInput
// para quedarnos solo con los campos que el cliente debe enviar (no id, no relaciones).
export const createProduct = async ({ name, description, stock, price, color, material, category }:
    Pick<ProductCreateInput, "name" | "description" | "stock" | "price" | "color" | "material" | "category">
) => {
    // Buscamos si ya existe un producto con ese name. Usamos findFirst (no findUnique)
    // porque "name" NO es un campo @unique en el schema; findFirst acepta cualquier campo en el where.
    const productExisting = await prisma.product.findFirst({
        where: { name }
    })

    // Si ya hay un producto con ese nombre, lanzamos un error para no duplicarlo.
    if (productExisting) {
        throw new Error("El producto ya existe actualmente.")
    }

    // Creamos el nuevo producto pasando en "data" todos los campos recibidos.
    const newProduct = await prisma.product.create({
        data: {
            name,
            description,
            stock,
            price,
            color,
            material,
            category,
        }
    })

    // Devolvemos el producto creado para que el controller lo envíe en la respuesta.
    return newProduct;
}

// ---------- READ (todos) ----------
// Devuelve la lista completa de productos. No recibe parámetros.
export const getProducts = async () => {
    // findMany sin where trae todos los registros de la tabla product.
    // Usamos "select" para devolver solo los campos públicos y no exponer relaciones pesadas.
    const allProducts = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            stock: true,
            price: true,
            color: true,
            material: true,
            category: true,
        }
    })

    // Retornamos el arreglo de productos.
    return allProducts;
}

// ---------- READ (uno por id) ----------
// Recibe el id (number) del producto a buscar.
export const getProductById = async (id: number) => {
    // findUnique SÍ funciona aquí porque buscamos por "id", que es la clave primaria (@id) y por tanto única.
    const product = await prisma.product.findUnique({
        where: { id }
    })

    // Si no se encontró ningún producto con ese id, avisamos con un error.
    if (!product) {
        throw new Error("Producto no encontrado")
    }

    // Devolvemos el producto encontrado.
    return product;
}

// ---------- UPDATE ----------
// Recibe el id (obligatorio) y de forma opcional cualquiera de los campos editables.
// Partial<Pick<>> hace que todos los campos del Pick sean opcionales: así se pueden actualizar solo algunos.
// Lo combinamos con "& { id: number }" porque el id es obligatorio para saber QUÉ producto actualizar.
export const updateProduct = async ({ id, name, description, stock, price, color, material, category }:
    Partial<Pick<ProductCreateInput, "name" | "description" | "stock" | "price" | "color" | "material" | "category">> & { id: number }
) => {
    // update busca el registro por su clave única (id) y aplica solo los campos enviados en "data".
    // Si un campo viene undefined, Prisma simplemente no lo modifica.
    const update = await prisma.product.update({
        where: { id },
        data: {
            name,
            description,
            stock,
            price,
            color,
            material,
            category,
        }
    })

    // Devolvemos el producto ya actualizado.
    return update;
}

// ---------- DELETE ----------
// Recibe el id del producto a eliminar.
export const deleteProduct = async (id: number) => {
    // delete elimina el registro cuyo id coincida. Si no existe, Prisma lanza un error que el controller capturará.
    const deleted = await prisma.product.delete({
        where: { id }
    })

    // Devolvemos un mensaje de confirmación con el id eliminado.
    return `Producto ${id} eliminado correctamente`;
}
