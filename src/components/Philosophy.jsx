import React from "react";

const Philosophy = () => {
  return (
    <div className="text-stone-950 font-normal h-fit pb-16 md:pb-36 md:rounded-t-[4rem] md:-mt-[4rem] bg-white">
      <div className="text-[4rem] md:text-[8rem] py-9 md:py-36 px-6 md:px-32">
        <h1 className="leading-none">Our</h1>
        <h1
          id="design"
          className="text-[4.3rem] md:text-[8.5rem] leading-none tracking-wide"
        >
          philosophy
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-x-14">
        <video
          src="https://cdn.cuberto.com/cb/home/summary/2.mp4?3"
          autoPlay
          muted
          loop
          className="w-[90%] mx-auto md:mx-0 md:w-1/3"
        ></video>
        <div className="space-y-3 text-xl font-medium px-6">
          <p>
            At Elevante Labs, engineers collaborate &nbsp;
            <br className="hidden md:block" />
            with designers, strategists and product{" "}
            <br className="hidden md:block" />
            thinkers. We reject one-size-fits-all <br className="hidden md:block" />
            approaches and craft solutions tailored{" "}
            <br className="hidden md:block" />
            to each client's unique vision. No &nbsp;
            <br className="hidden md:block" />
            shortcuts, no compromises.
          </p>
          <p>
            We're fueled by technology that{" "}
            <br className="hidden md:block" />
            accelerates growth and unlocks new{" "}
            <br className="hidden md:block" />
            revenue streams. Our technical depth is{" "}
            <br className="hidden md:block" />
            unmatched, yet we constantly push to{" "}
            <br className="hidden md:block" />
            exceed every benchmark we <br className="hidden md:block" />
            set.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
