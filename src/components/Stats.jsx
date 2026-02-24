import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Projects Delivered" },
  { number: "60+", label: "Global Clients" },
  { number: "98%", label: "Client Retention" },
  { number: "12", label: "Countries Served" },
];

const Stats = () => {
  return (
    <div className="bg-stone-950 text-white py-20 md:py-32 px-6 md:px-32">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-2"
          >
            <div className="text-5xl md:text-8xl font-light tracking-tight">
              {stat.number}
            </div>
            <div className="text-sm md:text-base text-stone-400 uppercase tracking-widest">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
