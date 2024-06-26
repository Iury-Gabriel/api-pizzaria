import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface ProductRequest {
    name: string;
    description: string;
    price: string;
    banner: string;
    category_id: string;
}

class CreateProductService {
    async execute({ name, description, price, banner, category_id }: ProductRequest) {
        const product = await prismaClient.product.create({
            data: {
                name,
                description,
                price: price,
                banner,
                category_id
            }
        })

        return product
    }
}

export { CreateProductService }