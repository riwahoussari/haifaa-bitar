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
import {
  handleBookingInPerson,
  handleBookingOnline,
} from "@/components/global/BookingModal";

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
    <section className="my-container space-y-32 lg:space-y-40 xl:space-y-52">
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
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });
  const card4InView = useInView(card4Ref, { once: true });

  return (
    <div
      id="online-psychoanalytic-sessions"
      className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8 pt-32"
    >
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
          className="xl:w-[60px] lg:w-12 w-9 select-none"
        />
        <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
          Online Psychoanalytic Sessions
        </h2>
      </motion.div>

      {/* row 1 */}
      <div className="lg:grid grid-cols-12 justify-items-center flex flex-col-reverse w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* text */}
        <motion.div
          ref={card1Ref}
          animate={
            card1InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-7"
        >
          <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
            Engage in the analytic process from the privacy of your own space.
            Online sessions offer a secure and confidential frame where your
            speech can unfold freely—without interruption, judgement, or
            pressure. Whether you’re struggling with anxiety, emotional pain,
            obsessive thoughts, or trauma, this setting allows the work to
            continue across distances, offering consistency and depth as we
            listen together to what your unconscious reveals.
          </p>
        </motion.div>

        {/* illustration */}
        <motion.div
          ref={card4Ref}
          animate={
            card4InView ? { y: 0, opacity: 1 } : { y: "50px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0 col-span-5"
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
        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group"
          onClick={handleBookingOnline}
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
        </motion.div>

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
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });
  const card4InView = useInView(card4Ref, { once: true });

  return (
    <div
      id="in-person-psychoanalytic-sessions"
      className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8 pt-32"
    >
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
          className="xl:w-[60px] lg:w-12 w-9 select-none"
        />
        <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
          In-Person Psychoanalytic Sessions
        </h2>
      </motion.div>

      {/* row 1 */}
      <div className="lg:grid grid-cols-12 justify-items-center flex flex-col w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* illustration */}
        <motion.div
          ref={card4Ref}
          animate={
            card4InView ? { y: 0, opacity: 1 } : { y: "50px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0 col-span-5"
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
          className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-7"
        >
          <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
            In the quiet of the consulting room, face-to-face sessions offer a
            dedicated space where speech can take shape. Here, you are invited
            to explore what lies beneath the surface of your suffering. This is
            not simply “talk therapy,” but an encounter with yourself—through
            language, silence, and the unsaid. It is a space where symptoms
            begin to shift, and meaning begins to emerge.
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
        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="group"
          onClick={handleBookingInPerson}
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
        </motion.div>
      </div>
    </div>
  );
}

function CtaSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section className="flex flex-col items-center relative my-container py-10">
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
