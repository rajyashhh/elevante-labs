import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const clients = [
  "Stripe",
  "Shopify",
  "Notion",
  "Vercel",
  "Figma",
  "Datadog",
  "Cloudflare",
  "Twilio",
  "Supabase",
  "MongoDB",
];

const ClientLogos = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div
      ref={containerRef}
      className="bg-stone-950 text-white py-20 md:py-32 overflow-hidden"
    >
      <p className="text-sm uppercase tracking-widest text-stone-500 text-center mb-14 md:mb-20 px-6">
        Trusted by industry leaders
      </p>

      {/* Row 1 - scrolls left */}
      <motion.div
        style={{ x: x1 }}
        className="flex items-center gap-12 md:gap-20 mb-8 md:mb-12"
      >
        {[...clients, ...clients].map((client, i) => (
          <span
            key={`r1-${i}`}
            className="text-3xl md:text-5xl font-light text-stone-600 whitespace-nowrap shrink-0 hover:text-white transition-colors duration-300 cursor-default"
          >
            {client}
          </span>
        ))}
      </motion.div>

      {/* Row 2 - scrolls right */}
      <motion.div
        style={{ x: x2 }}
        className="flex items-center gap-12 md:gap-20"
      >
        {[...clients.slice(5), ...clients.slice(0, 5), ...clients].map(
          (client, i) => (
            <span
              key={`r2-${i}`}
              className="text-3xl md:text-5xl font-light text-stone-600 whitespace-nowrap shrink-0 hover:text-white transition-colors duration-300 cursor-default"
            >
              {client}
            </span>
          )
        )}
      </motion.div>
    </div>
  );
};

export default ClientLogos;
