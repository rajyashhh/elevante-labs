import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="bg-white text-stone-950 py-24 md:py-44 px-6 md:px-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-8xl font-light leading-tight mb-6 md:mb-10">
          Have a project in
          <br />
          <span
            id="design"
            className="text-[2.8rem] md:text-[6rem] tracking-wide"
          >
            mind?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 md:mb-16">
          Let's talk about how we can turn your idea into a product that scales.
          We'd love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <motion.a
            href="mailto:hello@elevantelabs.com"
            initial="initial"
            whileHover="hovered"
            className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-950 overflow-hidden cursor-pointer w-64 md:w-72"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%", opacity: 0 },
              }}
              transition={{ duration: 0.15 }}
              className="py-5 md:py-6 text-stone-950 bg-white border-none rounded-full text-lg"
            >
              Start a Project
            </motion.div>
            <motion.div
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ duration: 0.15, type: "tween", ease: "easeIn" }}
              className="absolute inset-0 rounded-full py-5 md:py-6 text-white bg-stone-950 border-none text-lg"
            >
              Start a Project
            </motion.div>
          </motion.a>

          <motion.a
            href="mailto:hello@elevantelabs.com"
            initial="initial"
            whileHover="hovered"
            className="relative flex flex-col whitespace-nowrap rounded-full p-0 text-center border border-stone-300 overflow-hidden cursor-pointer w-64 md:w-72"
          >
            <motion.div
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%", opacity: 0 },
              }}
              transition={{ duration: 0.15 }}
              className="py-5 md:py-6 text-stone-500 bg-white border-none rounded-full text-lg"
            >
              Book a Call
            </motion.div>
            <motion.div
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{ duration: 0.15, type: "tween", ease: "easeIn" }}
              className="absolute inset-0 rounded-full py-5 md:py-6 text-white bg-stone-950 border-none text-lg"
            >
              Book a Call
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
