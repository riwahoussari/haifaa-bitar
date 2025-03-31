"use client";
import ArrowSvg from "@/components/global/ArrowSvg";
import Button from "@/components/global/Button";
import Image from "next/image";
import IllustrationOnlineTherapy from "../../../public/illustration-online-therapy.svg";
import IllustrationClinicalTherapy from "../../../public/illustration-clinical-therapy.svg";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function ServicesSection() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });

  return (
    <section className="my-container flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-12">
      <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl text-center">
        Services
      </h2>

      {/* services */}
      <div className="flex flex-col lg:flex-row w-[min(100%,600px)] lg:w-full 2xl:gap-16 xl:gap-12 lg:gap-8 gap-12 mx-auto">
        <motion.div
          ref={card1Ref}
          animate={
            card1InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <div className="group/card hover:bg-primary hover:text-white duration-300 ease-in-out w-full flex flex-col px-5 py-12 gap-8 lg:p-12 items-center border-primary border-1 rounded-lg">
            <Image
              src={IllustrationOnlineTherapy}
              alt="Illustration of online therapy session."
              className="lg:w-full w-[min(94%,400px)]"
            />
            <div className="text-center space-y-5">
              <h3 className="2xl:4xl lg:text-3xl text-3xl font-heading">
                Online Therapy Session
              </h3>
              <p className="2xl:text-xl lg:text-lg text-base opacity-80 w-[min(94%,450px)] mx-auto">
                Get professional support from the comfort of your home with
                secure and confidential online therapy sessions. Whether you're
                dealing with anxiety, depression, trauma, or OCD, online therapy
                offers flexibility and accessibility while helping you gain
                self-awareness and emotional clarity.
              </p>
            </div>
            <Button size="lg" variant="secondary" arrow>
              Book Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <div className="group/card hover:bg-primary hover:text-white duration-300 ease-in-out w-full flex flex-col px-5 py-12 gap-8 lg:p-12 items-center border-primary border-1 rounded-lg">
            <Image
              src={IllustrationClinicalTherapy}
              alt="Illustration of clinical therapy session."
              className="lg:w-full w-[min(94%,400px)]"
            />
            <div className="text-center space-y-5">
              <h3 className="2xl:4xl lg:text-3xl text-3xl font-heading">
                Clinical Therapy Session
              </h3>
              <p className="2xl:text-xl lg:text-lg text-base opacity-80 w-[min(94%,450px)] mx-auto">
                Experience face-to-face therapy in a private and supportive
                environment. In-clinic sessions provide a dedicated space for
                deep self-exploration, helping you overcome challenges, process
                emotions, and achieve personal growth with professional
                psychological guidance.
              </p>
            </div>
            <Button size="lg" variant="secondary" arrow>
              Book Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* opening hours */}
      <motion.div
        ref={card3Ref}
        animate={
          card3InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="lg:p-20 py-17 px-8 lg:w-full w-[min(100%,600px)] mx-auto flex flex-wrap gap-16 justify-around border-1 border-primary rounded-lg bg-primary-200"
      >
        {/* Days */}
        <div className="text-center space-y-2.5">
          <p className="font-light 2xl:text-2xl lg:text-xl text-lg">Days</p>
          <p className=" whitespace-pre font-semibold 2xl:text-3xl lg:text-2xl text-2xl">
            Mon{" "}
            <span className="inline-block translate-y-1">
              <ArrowSvg
                className="stroke-primary lg:w-8 w-6"
                strokeWidth={1.5}
              />
            </span>{" "}
            Fri
          </p>
        </div>
        {/* Hours */}
        <div className="text-center space-y-2.5">
          <p className="font-light 2xl:text-2xl lg:text-xl text-lg">Hours</p>
          <p className=" whitespace-pre font-semibold 2xl:text-3xl lg:text-2xl text-2xl">
            8:00AM{" "}
            <span className="inline-block translate-y-1">
              <ArrowSvg
                className="stroke-primary lg:w-8 w-6"
                strokeWidth={1.5}
              />
            </span>{" "}
            3:00PM
          </p>
        </div>
        {/* Days */}
        <div className="text-center space-y-2.5">
          <p className="font-light 2xl:text-2xl lg:text-xl text-lg">24/7</p>
          <p className=" whitespace-pre font-semibold 2xl:text-3xl lg:text-2xl text-2xl">
            Online Booking
          </p>
        </div>
      </motion.div>
    </section>
  );
}
