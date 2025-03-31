"use client";
import Image from "next/image";
import DecorativeLine from "../../assets/decorative-line.svg";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function WhatIsPsychoanalysis() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="what-is-psychoanalysis" className="flex flex-col items-center">
      <div className="flex justify-center gap-3">
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
        Psychoanalysis is a form of therapy that helps you understand the deeper
        layers of your mind—especially thoughts, emotions, and patterns you
        might not even be aware of. It is based on the idea that many of our
        feelings and behaviors are influenced by unconscious experiences, often
        from childhood. Through open conversation in a safe and supportive
        space, psychoanalysis helps you explore these hidden influences, uncover
        unresolved emotions, and gain insight into why you think, feel, and act
        the way you do. Unlike quick-fix approaches, psychoanalysis focuses on
        long-term self-discovery and healing, allowing you to break free from
        repeating patterns, overcome personal struggles, and develop a stronger
        sense of self. It’s not just about treating symptoms—it’s about truly
        understanding yourself and creating lasting change in your life.
      </motion.p>
    </section>
  );
}
