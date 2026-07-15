import prisma from "../prisma/client"

// ---------- READ (obtener direccion de un usuario) ----------
export const getAddressByUser =  async (userId: number) => {
    // findFirst busca la direccion que coincida con el userId.
    const address = await prisma.address.findFirst({
        where: { userId },
    });

    // Si no se encontro ninguna direccion para ese usuario, avisamos con un error.
    if (!address) {
        throw new Error("Direccion no encontrada");
    }

    // Devolvemos la direccion encontrada.
    return address;
};

// ---------- CREATE / UPDATE (agregar o actualizar direccion) ----------

export const createAddress = async (userId: number, line1: string, city:string, postalCode: number) =>{
    
    const ExistingAddress = await prisma.address.findFirst({
        where: { userId },
    });

    if(ExistingAddress){
        const updatedAddress = await prisma.address.update({
            where: { userId: ExistingAddress.userId },
            data: { line1, city, postalCode },
        });
        return updatedAddress;
    }else{
        const newAddress = await prisma.address.create({
            data: {
                line1,
                city,
                postalCode,
                user: { connect: { id: userId } },
            },
        });
        return newAddress;
    } 
}

// ---------- DELETE (eliminar direccion) ----------
export const removeAddress = async (userId: number) => {
    const exisitingAdrress = await prisma.address.findFirst({
        where: {userId}
    });
    if(!exisitingAdrress) {
        throw new Error("Direccion no encontrada");
    }else{
        const deleteAddress = await prisma.address.delete({
            where: {userId: exisitingAdrress.userId}
        })
        return ("Direccion eliminada correctamente");
    }
}

// En este servicio comprobar que funciona correctamente la creación, 
// actualización, obtención y eliminación de direcciones para un usuario 
// específico. Asegúrate de que las funciones manejen adecuadamente los 
// casos en los que no se encuentra una dirección existente y que las 
// actualizaciones se realicen correctamente cuando ya exista una dirección 
// para el usuario. Además, verifica que los errores se lancen de manera 
// apropiada cuando sea necesario. Tengo dudas en las que nose si me elimina 
// la dirección unicamente por el userId o si hay que pasarle el id de la 
// dirección, ya que en el modelo de address no hay un id unico, solo el userId.
