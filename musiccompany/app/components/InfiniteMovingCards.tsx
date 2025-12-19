"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

import { div } from "motion/react-client";

export function InfiniteMovingCardsDemo() {
  return (



  <div className="h-[40rem] w-full dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
    
  );
}

const testimonials = [
  {
    quote:
      "Joining the Music School was the best decision I've made. The guitar instructors are not just teachers; they are mentors who truly care about your growth and helped me find my unique sound.",
    name: "Alex Johnson",
    title: "Guitar Student",
  },
  {
    quote:
      "The music production course opened my eyes to the technical side of music. I went from making simple beats in my bedroom to producing professional-quality tracks ready for streaming platforms.",
    name: "Samantha Lee",
    title: "Music Production Student",
  },
  {
    quote:
      "I was always too shy to sing in public. The vocal coaching here gave me the confidence to finally find my voice and perform on stage without fear. The environment is so supportive.",
    name: "Michael Chen",
    title: "Vocal Arts Student",
  },
  {
    quote:
      "The piano lessons for beginners are fantastic. The curriculum is structured yet flexible, making learning a complex instrument feel fun and rewarding rather than a chore.",
    name: "Emily Davis",
    title: "Parent of a Piano Student",
  },
  {
    quote:
      "Understanding music theory seemed impossible until I took the jazz improvisation class. It completely transformed how I hear and play music. Highly recommended for any serious musician.",
    name: "Chris Wilson",
    title: "Advanced Jazz Student",
  },
];