import { sign } from "jsonwebtoken";
import prismaClient from "../../prisma";
import * as bcrypt from "bcryptjs";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                password: true

            }
        })

        if(!user) {
            throw new Error("User or password incorrect")
        }

        const passwordMatch = await bcrypt.compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("User or password incorrect")
        }

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }