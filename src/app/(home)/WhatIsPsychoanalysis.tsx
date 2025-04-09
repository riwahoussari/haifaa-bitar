"use client";
import Image from "next/image";
import DecorativeLine from "../../assets/decorative-line.svg";
import { useInView, motion } from "motion/react";
import { useRef, useState } from "react";

export default function WhatIsPsychoanalysis() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  const [hidden, setHidden] = useState(true);

  return (
    <section id="what-is-psychoanalysis" className="flex flex-col items-center">
      <div className="flex justify-center gap-3 select-none">
        <Image
          src={DecorativeLine}
          alt=""
          aria-hidden
          className="xl:w-[200px] lg:w-[180px] w-[140px]"
        />
        <Image
          src={DecorativeLine}
          alt=""
          aria-hidden
          className="xl:w-[200px] lg:w-[180px] w-[140px] rotate-y-180"
        />
      </div>
      <motion.h2
        animate={
          titleInView
            ? { rotateX: "0", opacity: 1, y: "0" }
            : { rotateX: "90deg", opacity: 0, y: "50%" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        ref={titleRef}
        className="font-heading xl:text-6xl lg:text-5xl text-4xl text-center xl:mt-12 xl:mb-6 mt-10 mb-4"
      >
        What Is Psychoanalysis?
      </motion.h2>
      <motion.p
        animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center xl:w-[800px] lg:w-[700px] w-[min(90%,650px)] xl:text-xl lg:text-lg text-lg leading-[160%] opacity-80"
      >
        "To enter psychoanalysis is to dare to know oneself—and to be forever
        changed by what one finds."
        <br />
        <br />
        Psychoanalysis is not simply a form of therapy, it is an encounter with
        the deepest layers of the human psyche. Beneath what we believe we know
        about ourselves lies an unconscious structured by language, where
        forgotten memories, early desires, and unspoken truths continue to shape
        our way of being.
        <span className={hidden ? "hidden" : ""}>
        <br />
        <br />
        In the psychoanalytic space, every word, silence, slip, and hesitation
        becomes a clue. Through this unique experience of speaking freely, one
        begins to trace the logic of one’s suffering—repetitions that return,
        not by choice, but as expressions of something unresolved and unknown.
          <br />
          <br />
          Psychoanalysis does not offer quick solutions. It offers something far
          more profound: the possibility of transformation through truth. It is
          a path toward discovering the desire that animates you, beyond roles,
          symptoms, and appearances.
        </span>{" "}
        <span
          className="underline hover:no-underline font-medium cursor-pointer "
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          {hidden ? "Read More" : "Show Less"}
        </span>
      </motion.p>
    </section>
  );
}
