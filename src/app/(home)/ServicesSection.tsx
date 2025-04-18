"use client";
import ArrowSvg from "@/components/global/ArrowSvg";
import Button from "@/components/global/Button";
import Image from "next/image";
import IllustrationOnlineTherapy from "../../../public/illustration-online-therapy.svg";
import IllustrationClinicalTherapy from "../../../public/illustration-clinical-therapy.svg";
import { useInView, motion } from "motion/react";
import { useRef } from "react";
import {
  BookingButtonInPerson,
  BookingButtonOnline,
} from "@/components/global/BookingButton";

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
          <BookingButtonOnline className="cursor-pointer">
            <div className="group/card hover:bg-primary hover:text-white duration-300 ease-in-out w-full flex flex-col px-5 py-12 gap-8 lg:p-12 items-center border-primary border-1 rounded-lg">
              <Image
                src={IllustrationOnlineTherapy}
                alt="Illustration of online therapy session."
                className="lg:w-full w-[min(94%,400px)]"
              />
              <div className="text-center space-y-5">
                <h3 className="2xl:4xl lg:text-3xl text-3xl font-heading">
                  Online Psychoanalytic Session
                </h3>
                <p className="2xl:text-xl lg:text-lg text-base opacity-80 w-[min(94%,450px)] mx-auto">
                  Engage in the analytic process from the privacy of your own
                  space. Online sessions provide a secure, confidential space
                  where your speech can unfold freely—without judgement or
                  pressure. Whether you're facing anxiety, emotional pain, or
                  trauma, this setting allows consistent, in-depth work to
                  continue from anywhere.
                </p>
              </div>
              <Button size="lg" variant="secondary" arrow>
                Book Now
              </Button>
            </div>
          </BookingButtonOnline>
        </motion.div>

        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full"
        >
          <BookingButtonInPerson className="cursor-pointer">
            <div className="group/card hover:bg-primary hover:text-white duration-300 ease-in-out w-full flex flex-col px-5 py-12 gap-8 lg:p-12 items-center border-primary border-1 rounded-lg">
              <Image
                src={IllustrationClinicalTherapy}
                alt="Illustration of clinical therapy session."
                className="lg:w-full w-[min(94%,400px)]"
              />
              <div className="text-center space-y-5">
                <h3 className="2xl:4xl lg:text-3xl text-3xl font-heading">
                  In-Person Psychoanalytic Session
                </h3>
                <p className="2xl:text-xl lg:text-lg text-base opacity-80 w-[min(94%,450px)] mx-auto">
                  In the quiet of the consulting room, face-to-face sessions
                  offer a quiet space where speech can take shape and deeper
                  layers of suffering can be explored. Beyond “talk therapy,”
                  this is an encounter with yourself—through language, silence,
                  and the unsaid—where symptoms begin to shift and meaning can
                  emerge.
                </p>
              </div>
              <Button size="lg" variant="secondary" arrow>
                Book Now
              </Button>
            </div>
          </BookingButtonInPerson>
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
