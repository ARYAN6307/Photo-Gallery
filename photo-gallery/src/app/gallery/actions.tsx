"use server"

import { revalidatePath } from "next/cache";
const cloudinary=require("cloudinary").v2;

const CLOUDINARY_API_KEY="569718411388971"
const CLOUDINARY_API_SECRET="wCCAqv0CcB6nK1L6NnzbVgyRicc"
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

export async function setAsFavoriteAction(publicId:string, isFav:boolean){
    if(isFav)
    {
        await cloudinary.uploader.remove_tag("favorite",[publicId]);

    }
    else{
        await cloudinary.uploader.add_tag("favorite",[publicId]);

    }
revalidatePath("/gallery");

}