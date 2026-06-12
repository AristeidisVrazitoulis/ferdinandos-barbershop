"use client";
import {ChevronLeft, ChevronRight} from "lucide-react"
import { useState, useEffect } from "react";




const arrowSize = 42

export default function Carousel({imageNames}){

    const [currentIndex, setCurrentIndex] = useState(0)

    const numOfImages = imageNames.length

    const nextImage = () => {
        setCurrentIndex( (currentIndex + 1) % numOfImages) 
    } 

    const previousImage = () => {
        setCurrentIndex((currentIndex - 1 + numOfImages) % numOfImages)
    }

    useEffect(() => {
        const timer = setInterval(nextImage, 4000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return(
        <>
    <div className="relative w-full h-96 rounded overflow-hidden">
  {imageNames.map((img, index) => (
    <img
      key={img}
      src={`/images/${img}`}
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
        index === currentIndex ? 'opacity-100' : 'opacity-0'
      }`}
    />
  ))}
</div>
    <div className="flex p-6 justify-center gap-6">
        {imageNames.map((img, index) => {
            return <div key={img} className={`w-8 h-0.5 bg-text-primary ${index !== currentIndex ? 'opacity-30' : ''}`} />
        })}
       
    </div>
    </>

    )
}