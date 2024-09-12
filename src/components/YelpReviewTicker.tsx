'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Review {
    id: number;
    text: string;
    author: string;
    rating: number;
}

const reviews: Review[] = [
    {
        id: 1,
        text: "Highly recommended! Great product selection and great service. The rental program is very useful if you are looking for a racquet replacement.",
        author: "Slava F.",
        rating: 5,
    },
    {
        id: 2,
        text: "One of my Racquetball colleagues, Todd suggested ...",
        author: "William L.",
        rating: 5,
    },
    {
        id: 3,
        text: "Best tennis store in Chicago, hands down. Always my go-to for equipment.",
        author: "David L.",
        rating: 4,
    },
    {
        id: 4,
        text: "I tried demoing tennis racquets a few times from other online stores like tennis express or tennis point ... Thanks tennis 27",
        author: "Ario P.",
        rating: 5,
    },
];

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
    <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 mx-4 mt-5">
        <div className="flex items-center mb-4">
            <div className="text-yellow-400 mr-2">
                {"★".repeat(review.rating)}
            </div>
            <div className="text-gray-600 text-sm">{review.rating}.0</div>
        </div>
        <p className="text-gray-800 mb-4 h-24 overflow-hidden">{review.text}</p>
        <p className="text-gray-600 text-sm">- {review.author}</p>
    </div>
);

const YelpReviewTicker: React.FC = () => {
    const [duplicatedReviews, setDuplicatedReviews] = useState<Review[]>([]);

    useEffect(() => {
        setDuplicatedReviews([...reviews, ...reviews, ...reviews]);
    }, []);

    return (
        <div className="relative w-full overflow-hidden bg-gray-100 py-10">
            <div className="absolute top-4 left-4 z-10">
                <Image
                    src="/images/yelp-logo.webp"
                    alt="Yelp Logo"
                    width={200}
                    height={200}
                />
            </div>
            <div className="flex animate-infinite-scroll pt-16">
                {duplicatedReviews.map((review, index) => (
                    <ReviewCard key={`${review.id}-${index}`} review={review} />
                ))}
            </div>
        </div>
    );
};

export default YelpReviewTicker;