import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";


async function main() {
    const prisma = new PrismaClient();
    await prisma.product.deleteMany(); //Ang product dire kay mao ni sya ang model nato kaganina and we use a deleteMany() function method, so that it can delete any data in the Product Table.

    await prisma.product.createMany({data: sampleData.products}); //sampleData ra maoy gigamit dire para sa sample data nga gamiton. Or maoy sample data sulod sa database table which is ang Product.

    console.log("Database seeded successfully!")
}

main();