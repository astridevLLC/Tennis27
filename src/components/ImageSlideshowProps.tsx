'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
    images: string[];
}

export function ImageSlideshow({ images }: ImageSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-full overflow-hidden rounded-lg aspect-[4/3]">
            {images.map((src, index) => (
                <div
                    key={index}
                    className="absolute top-0 left-0 w-full h-full transition-opacity duration-500"
                    style={{
                        opacity: index === currentIndex ? 1 : 0,
                        zIndex: images.length - index
                    }}
                >
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                        priority={index === 0}
                    />
                </div>
            ))}
        </div>
    );
}
export default ImageSlideshow;