"use client";

import { CldImage, CloudinaryUploadWidgetResults } from "next-cloudinary";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default function Home() {
  const handleUpload = (result: CloudinaryUploadWidgetResults) => {
    if (result.info && typeof result.info !== 'string') {
      setImageId(result.info.public_id);
    } else {
      console.error('Upload failed or result.info is not an object');
    }
  };
  const [imageId, setImageId] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={handleUpload}
        uploadPreset="giomsr4s"
      />

      {imageId && (
        <CldImage
          width="500"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
