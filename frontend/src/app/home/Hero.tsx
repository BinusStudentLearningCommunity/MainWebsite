"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

const dynamicWords = ["CONNECT", "LEARN", "GROW"];

const Hero = ({ backgroundImageSrc }: { backgroundImageSrc: string }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center"
    >
      <Image
        src={backgroundImageSrc}
        alt="BINUS Student Learning Center"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center px-4">
        <p
          className={`font-light text-white text-lg md:text-xl tracking-widest uppercase ${poppins.className}`}
        >
          BINUS STUDENT LEARNING CENTER
        </p>

        <h1
          className={`mt-2 text-4xl sm:text-5xl md:text-6xl text-white font-medium ${poppins.className} flex items-center`}
        >
          <span>Where Students</span>

          <span className="inline-block text-left ml-3 md:ml-4 w-[9ch]">
            <span
              className="font-bold text-[#19A89D]"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(25, 168, 157, 0.7))",
              }}
            >
              {dynamicWords[wordIndex]}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
