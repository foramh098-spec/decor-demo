"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={cn(
              "relative cursor-pointer group overflow-hidden bg-[var(--color-cream)]",
              index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-square"
            )}
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[var(--color-charcoal)]/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)] transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={32} />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
            <Image
              src={selectedImage}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
