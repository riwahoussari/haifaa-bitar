"use client";

import Image from "next/image";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import { motion, useInView } from "motion/react";
import { useRef } from "react";


function renderWords(text: string, inView: boolean) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="overflow-hidden inline-block">
      <motion.span
        className={"inline-block"}
        animate={inView ? { y: 0 } : { y: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.05 }}
      >
        {word}{" "}
      </motion.span>
    </span>
  ));
}

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="my-container relative space-y-6  xl:py-20 lg:py-18 py-14"
    >
      <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl sm:w-[70%] w-[80%] mx-auto leading-[120%] whitespace-pre flex flex-wrap items-end">
        {renderWords(
          "If we wait until we're ready, we'll be waiting for the rest of our lives.",
          sectionInView
        )}
      </h2>
      <motion.p animate={sectionInView ? {opacity: 1} : {opacity: 0.5}} transition={{duration: 0.5, ease: "easeInOut", delay: 0.2}} className="2xl:text-3xl lg:text-2xl text-2xl font-light opacity-50 text-end sm:w-[70%] w-[80%] mx-auto">
        - Lemony Snicket
      </motion.p>

      {/* decorative corners */}
      <motion.div
        animate={
          sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-20%" }
        }
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0"
      >
        <Image src={DecorativeCorner} alt="" aria-hidden />
      </motion.div>
      <motion.div
        animate={
          sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: "-20%" }
        }
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.4 }}
        className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180"
      >
        <Image src={DecorativeCorner} alt="" aria-hidden />
      </motion.div>
    </section>
  );
}
