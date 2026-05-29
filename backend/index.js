//Falta modificar este archivo para que funcione correctamente, leer documentacion
import { PrismaClient } from "../backend/src/generated/prisma/client";

const prisma = new PrismaClient()

export  const main = async () => {
  const createUser = await  prisma.user.create({
        data:{
            name: "carlos",
            email: "carlos@hotmail.com",
            passwordHash: "123456789"
        }
    })
    console.log(createUser);
    
}


main()