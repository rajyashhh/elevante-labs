import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  const footerLinks = {
    Services: [
      "Web Development",
      "Mobile Apps",
      "Cloud Architecture",
      "AI & Machine Learning",
      "UI/UX Design",
      "DevOps Consulting",
    ],
    Company: [
      "About Us",
      "Careers",
      "Blog",
      "Case Studies",
      "Open Source",
      "Press Kit",
    ],
    Connect: [
      { name: "Twitter / X", url: "https://x.com/elevantelabs" },
      { name: "LinkedIn", url: "https://linkedin.com/company/elevantelabs" },
      { name: "GitHub", url: "https://github.com/elevantelabs" },
      { name: "Dribbble", url: "https://dribbble.com/elevantelabs" },
    ],
  };

  return (
    <footer className="bg-stone-950 text-white pt-20 md:pt-32 pb-8 px-6 md:px-32">
      {/* Top section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0 pb-16 md:pb-24 border-b border-stone-800">
        {/* Brand */}
        <div className="md:w-1/3">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            elevante labs
          </h3>
          <p className="text-stone-400 text-sm md:text-base max-w-sm leading-relaxed">
            We build digital products that scale. From concept to deployment,
            we're your end-to-end technology partner.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm uppercase tracking-widest text-stone-500 mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const isObj = typeof link === "object";
                  return (
                    <li key={isObj ? link.name : link}>
                      {isObj ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-stone-300 hover:text-white transition-colors duration-200 text-sm md:text-base flex items-center gap-1"
                        >
                          {link.name}
                          <MdOutlineArrowOutward className="text-xs" />
                        </a>
                      ) : (
                        <span className="text-stone-300 hover:text-white transition-colors duration-200 text-sm md:text-base cursor-pointer">
                          {link}
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
        <p className="text-stone-600 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Elevante Labs. All rights reserved.
        </p>
        <div className="flex gap-6 text-stone-600 text-xs md:text-sm">
          <span className="hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            Cookies
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
