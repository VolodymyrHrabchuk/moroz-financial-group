"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReviewCard } from "./ReviewCard";
import { reviews } from "@/app/data/reviews";
import AnimatedText from "@/app/utils/AnimatedText";
import { motion } from "framer-motion";

export function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='relative max-w-[1400px] mx-auto px-6'>
      <AnimatedText>
        <h2 className='text-3xl sm:text-4xl md:text-5xl text-center leading-snug text-primary mb-10 font-bold'>
          Testimonials About Us
        </h2>
      </AnimatedText>

      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-4'
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full shadow-md'
        onClick={scrollPrev}
        aria-label='Scroll Previous'
      >
        <ChevronLeft className='h-6 w-6 text-primary' />
      </button>
      <button
        className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 p-2 rounded-full shadow-md'
        onClick={scrollNext}
        aria-label='Scroll Next'
      >
        <ChevronRight className='h-6 w-6 text-primary' />
      </button>
    </div>
  );
}
