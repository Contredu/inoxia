import prisma from "../prisma/client"
import bcrypt from "bcryptjs";

class UserService{

    async createUser({email, name, passwordHash}) {
        const existingUser = await prisma.user.findUnique({
            where: {email},
        });

        if(existingUser){
            throw new Error("Usuario ya registrado.")
        }

        const hashedPassword = await bcrypt.hash(passwordHash, 10)
    }
}
// no he terminado este servicio