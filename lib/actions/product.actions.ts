"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//Get latest products
export async function getLatestProducts() { //Nag gamit ni sya og "export" para ang function nga getLatestProducts() kay magamit sya sa ubang files
    const data = await prisma.product.findMany({  //Ang variable nga data dire kay mag fetch ni sya sa first four products which is our objects
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: { createdAt:"desc" }
    });

    // This data is a prisma object
    return convertToPlainObject(data);
}
 
    //Get single product by it's slug
    export async function getProductBySlug(slug: string) {
        return await prisma.product.findFirst({
            where: { slug: slug }, 
        });
    }

