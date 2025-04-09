"use client";
import { motion } from "motion/react";
import Sparkle from "../../assets/sparkle.svg";
import Button from "@/components/global/Button";
import Image from "next/image";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import DecorativeLine from "../../assets/decorative-line.svg";

function AnimProps(i: number) {
  return {
    className: "inline-block",
    initial: { y: "100%" },
    animate: { y: 0 },
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 + i * 0.05 },
  };
}

function renderWords(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i} className="overflow-hidden inline-block">
      <motion.span {...AnimProps(0)}>{word} </motion.span>
    </span>
  ));
}

export default function HeroSection() {
  return (
    <section>
      <div className="my-container relative flex flex-col items-center text-center py-[60px] 2xl:my-[100px] xl:my-[80px] lg:my-[60px] my-[40px]  ">
        {/* text */}
        <h1 className="font-heading 2xl:text-[110px] xl:text-[100px] lg:text-[80px] text-[max(52px,8vw)] leading-[1.2]">
          <span className="flex flex-wrap items-center justify-center whitespace-pre overflow-hidden">
            <span className="overflow-hidden">
              <motion.span {...AnimProps(1)}>Feeling </motion.span>
            </span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(2)}>Better </motion.span>
            </span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(3)}>Starts </motion.span>
            </span>
            <span className="w-full show-at-470"></span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(4)}>With </motion.span>
            </span>
            <br />
            <span className="overflow-hidden  h-min flex">
              <motion.span
                {...AnimProps(5)}
                className="sm:inline-block 2xl:w-[66px] xl:w-[60px] lg:w-[52px] w-[max(40px,5vw)] aspect-square  hidden"
              >
                <Image src={Sparkle} alt="" />
              </motion.span>
            </span>
            <span {...AnimProps(6)} className="sm:inline-block hidden">
              {" "}
            </span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(7)}>A </motion.span>
            </span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(8)}>Single </motion.span>
            </span>
            <span className="overflow-hidden">
              <motion.span {...AnimProps(9)}>Message.</motion.span>
            </span>
          </span>
        </h1>
        <p className="lg:mt-[25px] lg:mb-[50px] mt-[20px] mb-[40px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[20px] 2xl:w-[800px] xl:w-[760px] lg:w-[700px] sm:w-[70vw] w-[min(100%,470px)] opacity-80 leading-[150%] whitespace-pre flex flex-wrap justify-center items-end">
          {renderWords(
            "Haifaa Bitar – Clinical Psychologist, Psychotherapist, and Psychoanalyst."
          )}
          <br />
          {renderWords(
            "Helping individuals of all ages navigate trauma, anxiety, depression, and OCD through"
          )}
          <span className="inline-block overflow-hidden">
            <motion.a
              {...AnimProps(1)}
              href="#what-is-psychoanalysis"
              className="underline hover:[text-decoration:none] inline-block"
            >
              psychoanalysis
            </motion.a>
          </span>
          .
        </p>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
        >
          <Button arrow size="lg" variant="primary">
            Reach Out
          </Button>
        </motion.div>

        {/* decoration */}
        {/* corners - large screens */}
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="absolute select-none 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0 hidden sm:block"
        >
          <Image src={DecorativeCorner} alt="" aria-hidden />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "-20%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          className="absolute select-none 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180 hidden sm:block"
        >
          <Image src={DecorativeCorner} alt="" aria-hidden />
        </motion.div>
        {/* lines - small screens */}
        <div className="sm:hidden absolute select-none top-0 w-full flex justify-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: "-20%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
            className="w-[max(25vw,140px)]"
          >
            <Image src={DecorativeLine} alt="" aria-hidden />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "20%" }}
            animate={{ opacity: 1, x: 0 }}
            className="w-[max(25vw,140px)]"
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
          >
            <Image
              src={DecorativeLine}
              alt=""
              aria-hidden
              className="rotate-y-180"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
