"use client";
import Button from "@/components/global/Button";
import Image from "next/image";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import PageTitle from "@/components/global/PageTitle";
import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <ContactSection />
    </>
  );
}

function ContactSection() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });

  return (
    <section className="my-container flex flex-col lg:flex-row 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8">
      {/* form */}
      <motion.div
        ref={card1Ref}
        animate={
          card1InView ? { y: 0, opacity: 1 } : { y: "150px", opacity: 0.2 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" relative bg-primary-200 border-1 border-primary rounded-lg lg:w-1/2 w-[min(100%,600px)] mx-auto 2xl:p-18 xl:p-16 lg:p-14 md:p-14 sm:p-12 px-10 py-14"
      >
        <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl 2xl:mb-10 xl:mb-9 lg:mb-8 mb-6">
          Share A Message
        </h2>
        <form className="flex flex-col 2xl:gap-7 xl:gap-6 lg:gap-5 gap-6 items-start">
          <div className="flex flex-col 2xl:w-[80%] xl:w-[85%] lg:w-[90%] w-[min(100%,400px)] ">
            <label className="xl:text-lg text-base mb-1" htmlFor="fullName">
              Full Name
            </label>
            <input
              className="xl:text-xl lg:text-lg text-lg py-2 px-4 border-1 border-primary/50 hover:border-primary rounded-md"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. John Doe"
            />
          </div>
          <div className="flex flex-col 2xl:w-[80%] xl:w-[85%] lg:w-[90%] w-[min(100%,400px)] ">
            <label className="xl:text-lg text-base mb-1" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="xl:text-xl lg:text-lg text-lg py-2 px-4 border-1 border-primary/50 hover:border-primary rounded-md"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="e.g. 71 123 123"
            />
          </div>
          <div className="flex flex-col 2xl:w-[80%] xl:w-[85%] lg:w-[90%] w-[min(100%,400px)] ">
            <label className="xl:text-lg text-base mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="xl:text-xl lg:text-lg text-lg py-2 px-4 border-1 border-primary/50 hover:border-primary rounded-md"
              name="message"
              id="message"
              placeholder="Say or ask anything..."
              rows={3}
            ></textarea>
          </div>
          <Button size="md" variant="secondary" arrow>
            Send Message
          </Button>
        </form>

        {/* decorative corners */}
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[150] xl:w-[135px] lg:w-[120px] w-[105px] 2xl:top-5 xl:top-4 lg:top-3 top-2 2xl:left-5 xl:left-4 lg:left-3 left-2 "
        />
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[150px] xl:w-[135px] lg:w-[120px] w-[105px] 2xl:bottom-5 xl:bottom-4 lg:bottom-3 bottom-2 2xl:right-5 xl:right-4 lg:right-3 right-2 rotate-180 "
        />
      </motion.div>

      {/* Contact Links */}
      <div className="flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8 lg:w-1/2 w-[min(100%,600px)] mx-auto">
        {/* whatsapp */}
        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full border-1 border-primary rounded-lg relative text-center flex flex-col items-center justify-center 2xl:p-20 xl:p-18 lg:p-16 py-10 px-6"
        >
          <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl mb-6 flex flex-wrap justify-center whitespace-pre">
            <span>Whatsapp </span>
            <span>(03 404 129)</span>
          </h2>
          <a href="https://wa.me/9613404129" target="_blank">
            <Button size="md" variant="primary" arrow>
              Get In Touch
            </Button>
          </a>
        </motion.div>

        {/* email */}
        <motion.div
          ref={card3Ref}
          animate={
            card3InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-full border-1 border-primary rounded-lg relative text-center flex flex-col items-center justify-center 2xl:p-20 xl:p-18 lg:p-16 py-10 px-6"
        >
          <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl mb-6">
            Email (hayfaabigab258@gmail.com)
          </h2>
          <a href="mailto:hayfaabigab258@gmail.com" target="_blank">
            <Button size="md" variant="primary" arrow>
              Get In Touch
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
