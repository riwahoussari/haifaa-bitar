"use client";
import Image from "next/image";
import DecorativeLine from "../../assets/decorative-line.svg";
import HaifaaBitarPortrait from "../../../public/haifaa-portrait.jpg";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import AnimatedCounter from "@/components/global/AnimatedCounter";

export default function AboutSection() {
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);

  const title1InView = useInView(title1Ref, { once: true });
  const title2InView = useInView(title2Ref, { once: true });

  return (
    <section className="my-container flex lg:items-end items-center flex-col lg:flex-row">
      {/* image */}
      <div className="lg:sticky relative lg:bottom-0 lg:w-[50%]">
        <Image
          src={HaifaaBitarPortrait}
          placeholder="blur"
          alt="Portrait of Psychoanalyst Haifaa Bitar."
          className="lg:w-[80%]  w-[min(80%,350px)] max-h-dvh object-contain lg:mx-0 mx-auto"
        />

        <div
          className="lg:hidde absolute top-full w-full -translate-y-1/2 bg-bg-color flex justify-center gap-3 select-none"
          style={{ boxShadow: "0px 0px 10px 10px var(--color-bg-color)" }}
        >
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(20vw,140px)] lg:[visibility:hidden]"
          />
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(20vw,140px)] rotate-y-180 lg:[visibility:hidden]"
          />
        </div>
      </div>

      {/* text */}
      <div className="text-center lg:w-[50%] lg:space-y-[50vh] lg:py-[50vh] space-y-40 py-20 w-[min(100%,500px)] xl:text-xl lg:text-lg text-lg leading-[160%]">
        {/* About me */}
        <div
          ref={title1Ref}
          className="lg:w-[95%] ms-auto lg:space-y-12 space-y-8"
        >
          <motion.h2
            animate={
              title1InView
                ? { rotateX: "0", opacity: 1, y: "0" }
                : { rotateX: "90deg", opacity: 0, y: "50%" }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-heading xl:text-6xl lg:text-5xl text-4xl"
          >
            About Me
          </motion.h2>
          <motion.p
            animate={title1InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            With over 13 years of experience and more than 12,000 hours of
            clinical work in psychology and{" "}
            <a
              href="#what-is-psychoanalysis"
              className="underline hover:[text-decoration:none]"
            >
              {" "}
              psychoanalysis
            </a>
            , I accompany individuals through a transformative process of
            self-discovery. My work is grounded in psychoanalytic practice,
            which takes into account the unconscious dimensions of
            suffering—those that escape simple explanation yet shape the most
            intimate aspects of our lives.
            <br />
            <br />I believe each person carries a singular story, marked by
            early experiences, language, and desire. In the analytic space, you
            are invited to speak freely, without censorship or judgment, in
            order to explore what lies beneath the surface of symptoms,
            repetition, and emotional pain. This work does not seek to
            normalize, but to listen—to what insists, returns, and demands to be
            heard.
          </motion.p>
        </div>

        {/* My Approach */}
        <div
          ref={title2Ref}
          className="lg:w-[95%] ms-auto lg:space-y-12 space-y-8"
        >
          <motion.h2
            animate={
              title2InView
                ? { rotateX: "0", opacity: 1, y: "0" }
                : { rotateX: "90deg", opacity: 0, y: "50%" }
            }
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-heading xl:text-6xl lg:text-5xl text-4xl"
          >
            My Approach
          </motion.h2>
          <motion.p
            animate={title2InView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
           Guided by the psychoanalytic framework, I work to uncover what is
            hidden in speech: the unconscious formations that influence how we
            relate, love, suffer, and desire. I do not offer solutions—but
            rather, a space for truth to emerge in its own time and logic.
            <br />
            <br />
            Through this work, individuals may come to{" "}
            <strong className="font-normal">
              address trauma, anxiety, depression, obsessive thoughts, or
              relational difficulties
            </strong>
            —not only by alleviating symptoms, but by accessing a deeper
            understanding of who they are and what moves them.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="w-[95%] lg:ms-auto mx-auto lg:mx-0 space-y-32">
          <div className="space-y-6">
            <h2 className="font-heading xl:text-8xl lg:text-7xl text-6xl">
              <AnimatedCounter
                from={0}
                to={new Date().getFullYear() - 2012}
                duration={0.8}
              />
              +
            </h2>
            <p>Years of Experience</p>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading xl:text-8xl lg:text-7xl text-6xl">
              <AnimatedCounter from={0} to={12000} duration={1.2} />+
            </h2>
            <p>Clinical Hours </p>
          </div>
        </div>
      </div>
    </section>
  );
}
