"use client";
import PageTitle from "@/components/global/PageTitle";
import Image from "next/image";
import Sparkle from "../../assets/sparkle.svg";
import IllustrationOnlineTherapy from "../../../public/illustration-online-therapy.svg";
import IllustrationClinicalTherapy from "../../../public/illustration-clinical-therapy.svg";
import ArrowSvg from "@/components/global/ArrowSvg";
import DecorativeLine from "../../assets/decorative-line.svg";
import CheckMarkSvg from "@/components/global/CheckMarkSvg";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function ServicesPage() {
  return (
    <>
      <PageTitle>Services</PageTitle>
      <Services />
      <CtaSection />
    </>
  );
}

function Services() {
  return (
    <section className="my-container space-y-60 lg:space-y-72 xl:space-y-80">
      {/* Online Therapy */}
      <OnlineTherapy />
      {/* Clinical Therapy */}
      <ClinicalTherapy />
    </section>
  );
}

function OnlineTherapy() {
  const titleRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLAnchorElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });
  const card4InView = useInView(card4Ref, { once: true });

  return (
    <div className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
      {/* title */}
      <motion.div
        animate={
          titleInView
            ? { rotateX: "0", opacity: 1, y: "0" }
            : { rotateX: "90deg", opacity: 0, y: "50%" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        ref={titleRef}
        className="flex mb-8 xl:gap-6 lg:gap-5 gap-4 lg:justify-start justify-center "
      >
        <Image
          src={Sparkle}
          alt=""
          aria-hidden
          className="xl:w-[60px] lg:w-12 w-9"
        />
        <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
          Online Therapy Sessions
        </h2>
      </motion.div>

      {/* row 1 */}
      <div className="lg:grid grid-cols-2 justify-items-center flex flex-col-reverse w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* text */}
        <motion.div
          ref={card1Ref}
          animate={
            card1InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-1"
        >
          <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
            Online therapy offers the same level of professional support as
            in-person sessions, allowing you to receive guidance from the
            comfort of your home. Whether you’re struggling with anxiety,
            depression, trauma, OCD, or personal challenges, online therapy
            provides a safe space to explore your emotions and develop deeper
            self-awareness.
          </p>
        </motion.div>

        {/* illustration */}
        <motion.div
          ref={card4Ref}
          animate={
            card4InView ? { y: 0, opacity: 1 } : { y: "50px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0"
        >
          <Image
            src={IllustrationOnlineTherapy}
            alt="Illustration of online therapy session"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>

      {/* row 2 */}
      <div className="lg:grid grid-cols-3 flex flex-col-reverse w-[min(96%,600px)] lg:w-full mx-auto  2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* Button */}
        <motion.a
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          href="#"
          className="group"
        >
          <div className="flex justify-center items-center bg-primary-200 rounded-lg border-1 border-primary col-span-1 h-full group-hover:bg-primary group-hover:text-white duration-200 ease-in-out">
            <p className="font-heading xl:text-4xl lg:text-3xl text-2xl text-center py-4">
              Book A Session{" "}
              <ArrowSvg
                className="stroke-primary xl:w-8 lg:w-7 w-6 inline-block ms-2 group-hover:translate-x-3  group-hover:stroke-white duration-200 ease-in-out"
                strokeWidth={1.8}
              />
            </p>
          </div>
        </motion.a>

        {/* Checklist */}
        <motion.div
          ref={card3Ref}
          animate={
            card3InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-2"
        >
          <p className="2xl:text-2xl xl:text-xl lg:text-lg text-base leading-[120%] font-semibold 2xl:space-y-6 xl:space-y-5 lg:space-y-4 space-y-3">
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Convenient and accessible from anywhere
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Confidential and secure platform
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Ideal for individuals with busy schedules or limited mobility
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Effective for managing stress, anxiety, depression, and trauma
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function ClinicalTherapy() {
  const titleRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLAnchorElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });
  const card4InView = useInView(card4Ref, { once: true });

  return (
    <div className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
      {/* title */}
      <motion.div
        ref={titleRef}
        animate={
          titleInView
            ? { rotateX: "0", opacity: 1, y: "0" }
            : { rotateX: "90deg", opacity: 0, y: "50%" }
        }
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex mb-8 xl:gap-6 lg:gap-5 gap-4 lg:justify-start justify-center "
      >
        <Image
          src={Sparkle}
          alt=""
          aria-hidden
          className="xl:w-[60px] lg:w-12 w-9"
        />
        <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
          Clinical Therapy Sessions
        </h2>
      </motion.div>

      {/* row 1 */}
      <div className="lg:grid grid-cols-2 justify-items-center flex flex-col w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* illustration */}
        <motion.div
          ref={card4Ref}
          animate={
            card4InView ? { y: 0, opacity: 1 } : { y: "50px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0"
        >
          <Image
            src={IllustrationClinicalTherapy}
            className="w-full h-full object-contain"
            alt="Illustration of online therapy session"
          />
        </motion.div>

        {/* text */}
        <motion.div
          ref={card1Ref}
          animate={
            card1InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-1"
        >
          <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
            For those who prefer face-to-face interaction, in-clinic therapy
            sessions provide a private and comfortable setting to explore
            personal challenges. Meeting in person allows for a deeper
            therapeutic connection, helping you process emotions, overcome
            difficulties, and gain clarity in your life.
          </p>
        </motion.div>
      </div>

      {/* row 2 */}
      <div className="lg:grid grid-cols-3 flex flex-col w-[min(96%,600px)] lg:w-full mx-auto  2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* Checklist */}
        <motion.div
          ref={card3Ref}
          animate={
            card3InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-2"
        >
          <p className="2xl:text-2xl xl:text-xl lg:text-lg text-base leading-[120%] font-semibold 2xl:space-y-6 xl:space-y-5 lg:space-y-4 space-y-3">
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Personalized, in-depth therapeutic experience
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Support for trauma, anxiety, depression, OCD, and personal growth
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              A dedicated space for self-exploration and healing
            </span>
            <span className="gap-2 flex items-center">
              <span className="inline-block shrink-0 2xl:w-7 xl:w-6 lg:w-5 w-4">
                <CheckMarkSvg />
              </span>{" "}
              Face-to-face interaction for a stronger therapeutic bond
            </span>
          </p>
        </motion.div>

        {/* Button */}
        <motion.a
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          href="#"
          className="group"
        >
          <div className="flex justify-center items-center bg-primary-200 rounded-lg border-1 border-primary col-span-1 h-full group-hover:bg-primary group-hover:text-white duration-200 ease-in-out">
            <p className="font-heading xl:text-4xl lg:text-3xl text-2xl text-center py-4">
              Book A Session{" "}
              <ArrowSvg
                className="stroke-primary xl:w-8 lg:w-7 w-6 inline-block ms-2 group-hover:translate-x-3  group-hover:stroke-white duration-200 ease-in-out"
                strokeWidth={1.8}
              />
            </p>
          </div>
        </motion.a>
      </div>
    </div>
  );
}

function CtaSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="flex flex-col items-center relative my-container py-10">
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
        Start Your Therapy Journey
      </motion.h2>
      <motion.p
        animate={titleInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center xl:w-[800px] lg:w-[700px] w-[min(90%,650px)] xl:text-xl lg:text-lg text-lg leading-[160%] opacity-80"
      >
        Whether online or in person, therapy is an opportunity to gain insight,
        heal from past experiences, and take charge of your mental well-being.
        Book a session today and take the first step toward self-discovery and
        growth.
      </motion.p>
    </section>
  );
}
