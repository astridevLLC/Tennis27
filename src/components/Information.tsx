import {Container} from "@/components/Container";
import {FadeIn} from "@/components/FadeIn";
import {Tennis27Info} from "@/components/Tennis27Info";
import React from "react";

import {ImageSlideshow} from 'src/components/ImageSlideshowProps'
import path from "path";
import fs from "fs";

export function Information() {
    const images = getImagePaths();

    function getImagePaths(): string[] {
        const imageDirectory = path.join(process.cwd(), 'public/images/slideshow');

        if (!fs.existsSync(imageDirectory)) {
            console.error(`Directory not found: ${imageDirectory}`);
            return [];
        }

        const imageFilenames = fs.readdirSync(imageDirectory);
        const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

        return imageFilenames
            .filter(filename => supportedExtensions.includes(path.extname(filename).toLowerCase()))
            .map(filename => `/images/slideshow/${filename}`);
    }



    return (
        <div className="mt-32 rounded-4xl bg-grass py-20 sm:mt-32 sm:py-20 lg:mt-64">
            <Container>
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
                        Tennis27
                    </h2>
                    <div className="h-px flex-auto bg-white"/>
                </FadeIn>
                <FadeIn>
                    <div className="mt-10 flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2">
                            <Tennis27Info/>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <ImageSlideshow images={images}/>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </div>
    )
}