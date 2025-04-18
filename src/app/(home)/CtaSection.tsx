import Button from "@/components/global/Button";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import ClinicPhoto from "../../../public/clinic-photo.jpg";
import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "motion/react";
import { handleBooking } from "@/components/global/BookingModal";

export default function CtaSection() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card1InView = useInView(card1Ref, { once: true });
  const card2InView = useInView(card2Ref, { once: true });
  const card3InView = useInView(card3Ref, { once: true });

  return (
    <section className="my-container flex flex-col lg:flex-row 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8">
      <div className="flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8 lg:w-1/2 w-[min(100%,600px)] mx-auto">
        {/* cta */}
        <motion.div
          ref={card1Ref}
          animate={
            card1InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-1 border-primary rounded-lg relative text-center flex flex-col items-center 2xl:p-20 xl:p-18 lg:p-16 py-10  bg-primary-200"
        >
          {/* decorative corners */}
          <Image
            src={DecorativeCorner}
            alt=""
            aria-hidden
            className="absolute select-none 2xl:w-[150] xl:w-[135px] lg:w-[120px] w-[105px] 2xl:top-5 xl:top-4 lg:top-3 top-2 2xl:left-5 xl:left-4 lg:left-3 left-2 "
          />
          <Image
            src={DecorativeCorner}
            alt=""
            aria-hidden
            className="absolute select-none 2xl:w-[150px] xl:w-[135px] lg:w-[120px] w-[105px] 2xl:bottom-5 xl:bottom-4 lg:bottom-3 bottom-2 2xl:right-5 xl:right-4 lg:right-3 right-2 rotate-180 "
          />

          {/* content */}
          <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl">
            Here for You, Anytime
          </h2>
          <p className="xl:text-xl lg:text-lg text-lg text-black lg:mt-4 lg:mb-8 mt-3 mb-6 lg:w-full w-[min(85%,450px)]">
            You don’t have to figure it all out alone — support is here, one
            click away.
          </p>
          <Button onClick={handleBooking} size="md" variant="primary" arrow>
            Book Now
          </Button>
        </motion.div>

        {/* clinic photo */}
        <motion.div
          ref={card2Ref}
          animate={
            card2InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="border-1 border-primary rounded-lg lg:h-full h-40 relative overflow-hidden"
        >
          {/* Pseudo-element for inner shadow */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ boxShadow: "inset 0 0 10px 5px rgba(0,0,0,0.5)" }}
          />
          <Image
            src={ClinicPhoto}
            alt="Photo of the Clinic"
            placeholder="blur"
            className="absolute z-0 w-full h-full object-cover top-1/2 -translate-y-1/2"
          />
        </motion.div>
      </div>

      {/* form */}
      <motion.div
        ref={card3Ref}
        animate={
          card3InView ? { y: 0, opacity: 1 } : { y: "100px", opacity: 0.2 }
        }
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="border-1 border-primary rounded-lg lg:w-1/2 w-[min(100%,600px)] mx-auto 2xl:p-16 xl:p-14 lg:p-12 p-6"
      >
        <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl 2xl:mb-10 xl:mb-9 lg:mb-8 mb-6">
          Reach Out
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
      </motion.div>
    </section>
  );
}
