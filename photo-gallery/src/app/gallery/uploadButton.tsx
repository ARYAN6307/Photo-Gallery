"use client";
import { CldUploadButton } from "next-cloudinary";
import {UploadResult} from "../page";
import {  CloudinaryUploadWidgetResults } from 'next-cloudinary'; // Adjust the import according to your actual library
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UploadButton( ){
    const router=useRouter();
    const handleUpload = (result: CloudinaryUploadWidgetResults) => {
        setTimeout(()=>{
            console.log("refresh");
            router.refresh();
        },1000);
    };
    return(
                <Button asChild>
                <CldUploadButton onUpload={handleUpload} uploadPreset="mzeqbgjf" > 
<div className="flex gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
</svg>Upload</div>
</CldUploadButton>

                </Button>
        
    )
}