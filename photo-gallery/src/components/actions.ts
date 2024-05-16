"use server";

import { SearchResult } from "@/app/gallery/page";
const cloudinary=require("cloudinary").v2;

const CLOUDINARY_API_KEY="569718411388971"
const CLOUDINARY_API_SECRET="wCCAqv0CcB6nK1L6NnzbVgyRicc"
cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

export async function addImageToAlbum(image: SearchResult, album: string) {
  await cloudinary.api.create_folder(album);

  let parts = image.public_id.split("/");
  if (parts.length > 1) {
    parts = parts.slice(1);
  }
  const publicId = parts.join("/");

  await cloudinary.uploader.rename(image.public_id, `${album}/${publicId}`);
}
