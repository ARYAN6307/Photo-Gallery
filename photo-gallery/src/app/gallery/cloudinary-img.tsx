"use client"
import { Heart } from '@/components/ui/icons/heart'
import { CldImage } from 'next-cloudinary'
import React, { startTransition, useTransition } from 'react'
import { setAsFavoriteAction } from './actions'
import { SearchResult } from './page'
import { FullHeart } from '@/components/ui/icons/fullheart'


export function CloudinaryImage(props:any &{imageData:SearchResult}){
  const {imageData}=props;
  const [transition, startTransition]=useTransition();
  const isFavorited= imageData.tags.includes("favorite");
  return (
    <div className='relative'><CldImage
    {...props} src={imageData.public_id}
  />
  {isFavorited ?  <FullHeart onClick={()=>{
   startTransition(()=>{
    setAsFavoriteAction(imageData.public_id, false);
   })
  }} className='absolute top-2 right-2 hover:text-white text-red-600 cursor-pointer'/>
  : 
  <Heart onClick={()=>{
   startTransition(()=>{
    setAsFavoriteAction(imageData.public_id,true);
   })
  }} className='absolute top-2 right-2 hover:text-red-600'/>}
  </div>
    
  )
}
