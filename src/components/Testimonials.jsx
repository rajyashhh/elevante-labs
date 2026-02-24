import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const testimonials = [
  {
    quote:
      "Elevante Labs didn't just build our platform — they reimagined how our entire business operates. The technical depth and design sensibility are unmatched.",
    name: "Sarah Chen",
    role: "CTO, NovaPay",
  },
  {
    quote:
      "Working with them felt like having a world-class engineering team in-house. They shipped faster than we ever expected, and the quality speaks for itself.",
    name: "Marcus Webb",
    role: "Founder, Orbital Systems",
  },
  {
    quote:
      "From architecture to deployment, everything was handled with precision. Our platform handles 10x the traffic now with zero downtime.",
    name: "Priya Sharma",
    role: "VP Engineering, Helix Bio",
  },
  {
    quote:
      "They turned a rough concept into a product that raised our Series A. The team truly understands what it means to build for scale.",
    name: "James Okafor",
    role: "CEO, BrewStack",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-white text-stone-950 py-20 md:py-36 px-6 md:px-32">
      <div className="text-[3rem] md:text-[7rem] font-light leading-none mb-16 md:mb-28">
        <h1>What our</h1>
        <h1
          id="design"
          className="text-[3.3rem] md:text-[7.5rem] leading-none tracking-wide"
        >
          clients say
        </h1>
      </div>

      <div className="relative min-h-[280px] md:min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
            <p className="text-2xl md:text-4xl font-light leading-snug md:leading-relaxed mb-10">
              "{testimonials[current].quote}"
            </p>
            <div className="space-y-1">
              <p className="text-lg md:text-xl font-semibold">
                {testimonials[current].name}
              </p>
              <p className="text-stone-500 text-sm md:text-base">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-4 mt-12">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prev}
          className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-950 hover:text-white transition-colors duration-200"
        >
          <MdArrowBack className="text-xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center hover:bg-stone-950 hover:text-white transition-colors duration-200"
        >
          <MdArrowForward className="text-xl" />
        </motion.button>
        <span className="text-stone-400 text-sm ml-4">
          {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
