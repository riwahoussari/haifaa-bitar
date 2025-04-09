"use client";
import PageTitle from "@/components/global/PageTitle";
// import HaifaaBitarPortrait from "../../../public/haifaa-portrait-cropped.jpg";
import HaifaaBitarPortrait from "../../../public/linkedin-portrait-shadow.jpg";
import Image from "next/image";
import Sparkle from "../../assets/sparkle.svg";
import Button from "@/components/global/Button";
import { useRef, useState } from "react";
import { useInView, motion } from "motion/react";
import AnimatedCounter from "@/components/global/AnimatedCounter";

export default function AboutPage() {
  return (
    <>
      <PageTitle>About Me</PageTitle>
      <About1 />
      <About2 />
    </>
  );
}

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

function About1() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteInView = useInView(quoteRef, { once: true });

  return (
    <section className="my-container flex flex-col md:flex-row justify-between md:items-end items-center xl:gap-20 lg:gap-14 gap-10 overflow-hidden">
      {/* image */}
      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
        className="relative md:w-[40%] w-[min(80%,300px)] max-h-dvh"
      >
        <Image
          src={HaifaaBitarPortrait}
          placeholder="blur"
          alt="Portrait of Psychoanalyst Haifaa Bitar."
          className="w-full h-full object-cover"
        />
        <div
          className="w-[200%] absolute top-full left-1/2 -translate-1/2  h-10 rounded-[100%] bg-bg-color"
          style={{ boxShadow: "0px 0px 10px 20px var(--color-bg-color)" }}
        />
      </motion.div>

      {/* text */}
      <div
        ref={quoteRef}
        className="md:w-[60%] md:max-w-[unset] max-w-[450px] text-center md:text-start relative z-2"
      >
        {/* stars */}
        <motion.div
          animate={
            quoteInView ? { y: 0, opacity: 1 } : { y: "50%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex select-none gap-5 justify-center md:justify-start"
        >
          <Image
            src={Sparkle}
            alt=""
            aria-hidden
            className="xl:w-12 lg:w-10 w-8"
          />
          <Image
            src={Sparkle}
            alt=""
            aria-hidden
            className="xl:w-12 lg:w-10 w-8"
          />
        </motion.div>

        {/* Quote */}
        <p className="font-heading xl:text-5xl lg:text-4xl text-3xl leading-[1.2] mt-6 2xl:mb-32 lg:mb-24 md:mb-14 mb-10 whitespace-pre flex flex-wrap justify-center md:justify-start">
          {renderWords(
            `“Understanding oneself and one's own story is the most powerful tool a human can have.”`,
            quoteInView
          )}
        </p>

        {/* Stats */}
        <div className="md:grid  md:grid-cols-2 flex md:justify-between justify-around flex-wrap gap-x-10 gap-y-14 md:gap-0 2xl:mb-16 lg:mb-12 mb-7 ">
          <div className="space-y-2">
            <p className="font-heading xl:text-7xl lg:text-6xl text-5xl">
              <AnimatedCounter
                from={0}
                to={new Date().getFullYear() - 2012}
                duration={0.8}
              />
              +
            </p>
            <p className="xl:text-xl lg:text-lg opacity-70">
              Years of Experience
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-heading xl:text-7xl lg:text-6xl text-5xl">
              <AnimatedCounter from={0} to={12000} duration={1.2} />+
            </p>
            <p className="xl:text-xl lg:text-lg opacity-70">Clinical Hours</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About2() {
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const title3Ref = useRef<HTMLHeadingElement>(null);
  const title4Ref = useRef<HTMLHeadingElement>(null);
  const title5Ref = useRef<HTMLHeadingElement>(null);

  const title1InView = useInView(title1Ref, { once: true });
  const title2InView = useInView(title2Ref, { once: true });
  const title3InView = useInView(title3Ref, { once: true });
  const title4InView = useInView(title4Ref, { once: true });
  const title5InView = useInView(title5Ref, { once: true });

  const [showMore, setShowMore] = useState(false);

  return (
    <section className="my-container xl:space-y-44 lg:space-y-36 space-y-28">
      {/* About Me */}
      <div ref={title1Ref} className="xl:w-4xl lg:w-3xl md:w-2xl">
        <motion.h2
          animate={
            title1InView
              ? { rotateX: "0", opacity: 1, y: "0" }
              : { rotateX: "90deg", opacity: 0, y: "50%" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          animate={title1InView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="xl:text-xl lg:text-lg text-lg text-black"
        >
          As a clinical psychologist, psychotherapist, and psychoanalyst, I work
          within the psychoanalytical approach, which allows access to your
          unconscious mind, which allows you to explore and understand yourself
          better.
          <br />
          <br />
          Working within the field of clinical psychology since 2013, l have
          developed my expertise in treating trauma, depression, anxiety, and
          OCD by helping patients, of all age groups, develop insight into their
          condition and their life experiences to allow for further growth.
          <br />
          <br />
          My goal is to offer you the space to explore and analyze yourself from
          an analytical perspective, to be able to grow beyond your challenges,
          take charge of your own life, and to achieve your own goals.
        </motion.p>
      </div>

      {/* Recent Work Experience */}
      <div ref={title2Ref} className="xl:w-4xl lg:w-3xl md:w-2xl ">
        <motion.h2
          animate={
            title2InView
              ? { rotateX: "0", opacity: 1, y: "0" }
              : { rotateX: "90deg", opacity: 0, y: "50%" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4"
        >
          Recent Work Experience
        </motion.h2>
        <motion.div
          animate={title2InView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`divide-black divide-y xl:text-xl lg:text-lg text-lg text-black grid content-center ${showMore? "grid-rows-11" : "grid-rows-6"} `}
        >
          {/* 1 */}
          <div className=" grid grid-cols-12 gap-4 md:gap-14 py-3">
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">
                Clinical Psychologist & Psychoanalyst
              </p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Private Clinic
              </p>
            </div>

            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2015
              <span className="text-sm opacity-70">
                <br />
                till present
              </span>
            </p>
          </div>

          {/* 2 */}
          <div className=" grid grid-cols-12 gap-4 md:gap-14 py-3">
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">Psychoanalyst</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Being Center L.C.T.C
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2021
              <span className="text-sm opacity-70">
                <br />
                till present
              </span>
            </p>
          </div>

          {/* 3 */}
          <div className=" grid grid-cols-12 gap-4 md:gap-14 py-3">
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">Psychologist</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Talktime Dubai
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2021
              <span className="text-sm opacity-70">
                <br />
                till present
              </span>
            </p>
          </div>

          {/* 4 */}
          <div className=" grid grid-cols-12 gap-4 md:gap-14 py-3">
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">
                Consultant & Clinical Psychologist
              </p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Intersos - South
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2023
            </p>
          </div>

          {/* 5 */}
          <div className=" grid grid-cols-12 gap-4 md:gap-14 py-3">
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">
                Head Psychotherapist & Mental Health Trainer
              </p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Amurt - Chouf
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2019 - 2022
            </p>
          </div>

          {/* 6 */}
          <div
            style={{ display: showMore ? "grid" : "none" }}
            className=" grid grid-cols-12 gap-4 md:gap-14 py-3"
          >
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">School Psychologist</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Mabarrat Alimam Alrida
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2016 - 2020
            </p>
          </div>

          {/* 7 */}
          <div
            style={{ display: showMore ? "grid" : "none" }}
            className=" grid grid-cols-12 gap-4 md:gap-14 py-3"
          >
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">Psychologist & Consultant</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Sesobel - Nabatieh
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2016 - 2023
            </p>
          </div>

          {/* 8 */}
          <div
            style={{ display: showMore ? "grid" : "none" }}
            className=" grid grid-cols-12 gap-4 md:gap-14 py-3"
          >
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">School Psychologist</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Mabarrat Al Kher - Bint Jbeil
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2018 - 2020
            </p>
          </div>

          {/* 9 */}
          <div
            style={{ display: showMore ? "grid" : "none" }}
            className=" grid grid-cols-12 gap-4 md:gap-14 py-3"
          >
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">Psychologist</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Crea Center
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2013 - 2017
            </p>
          </div>

          {/* 10 */}
          <div
            style={{ display: showMore ? "grid" : "none" }}
            className=" grid grid-cols-12 gap-4 md:gap-14 py-3"
          >
            <div className="md:grid md:grid-cols-6 md:w-full col-span-9 md:col-span-10 ">
              <p className="md:col-span-4 ">Psychologist</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60">
                Sos - Sfaray
              </p>
            </div>
            <p className="col-span-3 md:col-span-2 text-end opacity-60 text-base">
              2015
            </p>
          </div>

          {/* show more / less */}
          <div
            className="border-b-1 hover:bg-black hover:text-white duration-200 ease-in-out cursor-pointer  flex justify-center items-center"
            onClick={() => setShowMore((prev) => !prev)}
          >
            <p className=" py-3 text-center ">
              {showMore ? "Show Less" : "See More"}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Education */}
      <div ref={title3Ref} className="xl:w-4xl lg:w-3xl md:w-2xl ">
        <motion.h2
          animate={
            title3InView
              ? { rotateX: "0", opacity: 1, y: "0" }
              : { rotateX: "90deg", opacity: 0, y: "50%" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4"
        >
          Education
        </motion.h2>
        <motion.div
          animate={title3InView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="divide-black divide-y  xl:text-xl lg:text-lg text-lg text-black"
        >
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full ">
              <p className="md:col-span-3 ">Training in Psychotherapy</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60 ">
                Being Center
              </p>
            </div>
            <p className="opacity-60">2019</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">
                Training in Lacanian Psychoanalysis
              </p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60 "></p>
            </div>
            <p className="opacity-60">2018</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">Masters in Clinical Psychology</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60 ">
                Lebanese University
              </p>
            </div>
            <p className="opacity-60">2016</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">Bachelor's of Psychology</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-60 ">
                Lebanese University
              </p>
            </div>
            <p className="opacity-60">2012</p>
          </div>
        </motion.div>
      </div>

      {/* Certification */}
      <div ref={title4Ref} className="xl:w-4xl lg:w-3xl md:w-2xl ">
        <motion.h2
          animate={
            title4InView
              ? { rotateX: "0", opacity: 1, y: "0" }
              : { rotateX: "90deg", opacity: 0, y: "50%" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4"
        >
          Certification
        </motion.h2>
        <motion.div
          animate={title4InView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="divide-black divide-y  xl:text-xl lg:text-lg text-lg text-black"
        >
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full ">
              <p className="md:col-span-2 ">DHA License</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-60">
                Forum Du Champ Lacanien Du Liban
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">MOH License</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-60">
                Lebanese Ministry of Health
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">Member of LOPsy</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-60">
                Lebanese Order of Psychologists
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">Member of FCLL</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-60">
                Forum Du Champ Lacanien Du Liban
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What To Expect */}
      <div ref={title5Ref} className="xl:w-4xl lg:w-3xl md:w-2xl">
        <motion.h2
          animate={
            title5InView
              ? { rotateX: "0", opacity: 1, y: "0" }
              : { rotateX: "90deg", opacity: 0, y: "50%" }
          }
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4"
        >
          What To Expect
        </motion.h2>
        <motion.p
          animate={title5InView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="xl:text-xl lg:text-lg text-lg text-black xl:mb-6 lg:mb-5 mb-4"
        >
          Therapy is a collaborative journey. Through thoughtful dialogue and
          analysis, I guide patients toward self-discovery, emotional clarity,
          and personal transformation. My goal is to provide a safe and
          supportive space where individuals can explore their inner world,
          overcome challenges, and reclaim control over their lives.
        </motion.p>
        <Button variant="secondary" arrow size="md">
          Book A Session
        </Button>
      </div>
    </section>
  );
}
