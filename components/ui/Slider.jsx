'use client'

import { useState } from "react"
import Review from "./Review"
import reviews from "@/app/data/reviews.json";
import { motion, AnimatePresence } from "framer-motion";

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerSection = 3;
    const totalItems = Math.ceil(reviews.length / itemsPerSection); // Total number of review items

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    };

    const goToPage = (index) => {
        setCurrentIndex(index);
    };

    const startIndex = currentIndex * itemsPerSection;
    const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerSection);

    return (
        <>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-10">
                <button onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-primary cursor-pointer">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.1 }}
                        className="m-10 flex flex-col md:flex-row md:justify-center gap-10 contenedor"
                    >
                        {visibleReviews.map((review, index) => (
                            <Review key={index} name={review.name} location={review.location} text={review.text} image={review.image} />
                        ))}
                    </motion.div>
                </AnimatePresence>
  
                <button onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-primary cursor-pointer">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className="flex justify-center gap-3 mt-10 md:mt-5">
                {Array.from({ length: totalItems }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToPage(index)}
                        className={`w-5 h-5 rounded-full transition-colors cursor-pointer ${index === currentIndex ? "bg-primary" : "bg-secondary"
                            }`}
                    ></button>
                ))}
            </div>
        </>
    )
}

export default Slider
