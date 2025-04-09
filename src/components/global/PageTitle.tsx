"use client";
import Image from "next/image";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import { motion } from "motion/react";

export default function PageTitle({ children }: { children: string }) {
  return (
    <section className="my-container 2xl:mt-[100px] xl:mt-[80px] lg:mt-[60px] mt-[40px] 2xl:mb-[200px] xl:mb-[160px] lg:mb-[120px] mb-[80px] relative space-y-6  xl:py-20 lg:py-18 py-14 ">
      <h1 className="font-heading 2xl:text-[110px] xl:text-[100px] lg:text-[80px] text-[max(52px,8vw)] text-center overflow-hidden">
        <motion.span
          className="inline-block"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        >
          {children}
        </motion.span>
      </h1>

      {/* decorative corners */}
      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        className="absolute select-none 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0"
      >
        <Image src={DecorativeCorner} alt="" aria-hidden />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: "-20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.4 }}
        className="absolute select-none 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180"
      >
        <Image src={DecorativeCorner} alt="" aria-hidden />
      </motion.div>
    </section>
  );
}
