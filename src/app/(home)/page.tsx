import Button from "@/components/global/Button";
import Image from "next/image";
import Sparkle from "../../assets/sparkle.svg";
import DecorativeCorner from "../../assets/decorative-corner.svg";
import DecorativeLine from "../../assets/decorative-line.svg";
import HaifaaBitarPortrait from "../../../public/haifaa-portrait.jpg";
import IllustrationOnlineTherapy from "../../../public/illustration-online-therapy.svg";
import IllustrationClinicalTherapy from "../../../public/illustration-clinical-therapy.svg";
import ArrowSvg from "@/components/global/ArrowSvg";
import ClinicPhoto from "../../../public/clinic-photo.jpg";

export default function Home() {
  return (
    <main className="space-y-40 mb-40">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhatIsPsychoanalysis />
      <QuoteSection />
      <CtaSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section>
      <div className="my-container relative flex flex-col items-center text-center py-[60px] my-[40px]  ">
        {/* text */}
        <h1 className="font-heading 2xl:text-[110px] xl:text-[100px] lg:text-[80px] text-[max(52px,8vw)] leading-[1.2]">
          <span className="flex flex-wrap items-center justify-center whitespace-pre">
            <span>Feeling </span>
            <span>Better </span>
            <span>Starts </span>
            <span className="w-full show-at-470"></span>
            <span>With </span>
            <br />
            <Image
              src={Sparkle}
              alt=""
              className="sm:inline-block 2xl:w-[66px] xl:w-[60px] lg:w-[52px] w-[max(40px,5vw)] hidden"
            />
            <span className="sm:inline-block hidden"> </span>
            <span>A </span>
            <span>Single </span>
            <span>Message.</span>
          </span>
        </h1>
        <p className="lg:mt-[25px] lg:mb-[50px] mt-[20px] mb-[40px] 2xl:text-[24px] xl:text-[22px] lg:text-[20px] text-[20px] 2xl:w-[800px] xl:w-[760px] lg:w-[700px] sm:w-[70vw] w-[min(100%,470px)] opacity-80 leading-[150%]">
          Haifaa Bitar – Clinical Psychologist, Psychotherapist, and
          Psychoanalyst.
          <br /> Helping individuals of all ages navigate trauma, anxiety,
          depression, and OCD through{" "}
          <a
            href="#what-is-psychoanalysis"
            className="underline hover:[text-decoration:none]"
          >
            psychoanalysis
          </a>
          .
        </p>
        <Button arrow size="lg" variant="primary">
          Reach Out
        </Button>

        {/* decoration */}
        {/* corners - large screens */}
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0 hidden sm:block"
        />
        <Image
          src={DecorativeCorner}
          alt=""
          aria-hidden
          className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180 hidden sm:block"
        />
        {/* lines - small screens */}
        <div className="sm:hidden absolute top-0 w-full flex justify-center gap-3">
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(25vw,140px)]"
          />
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(25vw,140px)] rotate-y-180"
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="my-container flex lg:items-end items-center flex-col lg:flex-row">
      <div className="lg:sticky relative lg:bottom-0 lg:w-[50%]">
        <Image
          src={HaifaaBitarPortrait}
          placeholder="blur"
          alt="Portrait of Psychoanalyst Haifaa Bitar."
          className="w-[80%] max-h-dvh object-contain lg:mx-0 mx-auto"
        />

        <div
          className="lg:hidden absolute top-full w-full -translate-y-1/2 bg-bg-color flex justify-center gap-3"
          style={{ boxShadow: "0px 0px 10px 10px var(--color-bg-color)" }}
        >
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(25vw,140px)]"
          />
          <Image
            src={DecorativeLine}
            alt=""
            aria-hidden
            className="w-[max(25vw,140px)] rotate-y-180"
          />
        </div>
      </div>

      <div className="text-center lg:w-[50%] lg:space-y-[50vh] lg:py-[50vh] space-y-40 py-20 w-[min(100%,500px)] xl:text-xl lg:text-lg text-lg leading-[160%]">
        <div className="lg:w-[95%] ms-auto lg:space-y-12 space-y-8">
          <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl">
            About Me
          </h2>
          <p>
            With over a decade of experience in clinical psychology and
            <a
              href="#what-is-psychoanalysis"
              className="underline hover:[text-decoration:none]"
            >
              {" "}
              psychoanalysis
            </a>
            , I specialize in helping individuals gain a deeper understanding of
            themselves and their life experiences.
            <br />
            <br />
            My approach is rooted in psychoanalysis, offering a space for
            self-exploration that leads to healing and personal growth.
          </p>
        </div>
        <div className="lg:w-[95%] ms-auto lg:space-y-12 space-y-8">
          <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl">
            My Approach
          </h2>
          <p>
            I work within the psychoanalytic framework, which delves into the
            unconscious mind to uncover hidden thoughts and emotions that shape
            behavior.
            <br />
            <br />
            This method allows for profound self-awareness, helping individuals
            <strong> address</strong> challenges such as{" "}
            <strong>trauma, anxiety, depression, and OCD.</strong>
          </p>
        </div>
        <div className="w-[95%] ms-auto space-y-32">
          <div className="space-y-6">
            <h2 className="font-heading xl:text-8xl lg:text-7xl text-6xl">
              {new Date().getFullYear() - 2012}+
            </h2>
            <p>Years of Experience</p>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading xl:text-8xl lg:text-7xl text-6xl">
              1000+
            </h2>
            <p>Sessions Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="my-container flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-12">
      <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl text-center">
        Services
      </h2>

      {/* services */}
      <div className="flex flex-col lg:flex-row w-[min(100%,600px)] lg:w-full 2xl:gap-16 xl:gap-12 lg:gap-8 gap-12 mx-auto">
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
              Get professional support from the comfort of your home with secure
              and confidential online therapy sessions. Whether you're dealing
              with anxiety, depression, trauma, or OCD, online therapy offers
              flexibility and accessibility while helping you gain
              self-awareness and emotional clarity.
            </p>
          </div>
          <Button size="lg" variant="secondary" arrow>
            Book Now
          </Button>
        </div>

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
              environment. In-clinic sessions provide a dedicated space for deep
              self-exploration, helping you overcome challenges, process
              emotions, and achieve personal growth with professional
              psychological guidance.
            </p>
          </div>
          <Button size="lg" variant="secondary" arrow>
            Book Now
          </Button>
        </div>
      </div>

      {/* opening hours */}
      <div className="lg:p-20 py-17 px-8 lg:w-full w-[min(100%,600px)] mx-auto flex flex-wrap gap-16 justify-around border-1 border-primary rounded-lg bg-primary-200">
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
      </div>
    </section>
  );
}

function WhatIsPsychoanalysis() {
  return (
    <section id="what-is-psychoanalysis" className="flex flex-col items-center">
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
      <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl text-center xl:mt-12 xl:mb-6 mt-10 mb-4">
        What Is Psychoanalysis?
      </h2>
      <p className="text-center xl:w-[800px] lg:w-[700px] w-[min(90%,650px)] xl:text-xl lg:text-lg text-lg leading-[160%] opacity-80">
      Psychoanalysis is a form of therapy that helps you understand the deeper layers of your mind—especially thoughts, emotions, and patterns you might not even be aware of. It is based on the idea that many of our feelings and behaviors are influenced by unconscious experiences, often from childhood. Through open conversation in a safe and supportive space, psychoanalysis helps you explore these hidden influences, uncover unresolved emotions, and gain insight into why you think, feel, and act the way you do. Unlike quick-fix approaches, psychoanalysis focuses on long-term self-discovery and healing, allowing you to break free from repeating patterns, overcome personal struggles, and develop a stronger sense of self. It’s not just about treating symptoms—it’s about truly understanding yourself and creating lasting change in your life.
      </p>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="my-container relative space-y-6  xl:py-20 lg:py-18 py-14">
      <h2 className="font-heading xl:text-6xl lg:text-5xl text-4xl sm:w-[70%] w-[80%] mx-auto leading-[120%]">
        If we wait until we're ready, we'll be waiting for the rest of our
        lives.
      </h2>
      <p className="2xl:text-3xl lg:text-2xl text-2xl font-light opacity-50 text-end sm:w-[70%] w-[80%] mx-auto">
        - Lemony Snicket
      </p>

      {/* decorative corners */}
      <Image
        src={DecorativeCorner}
        alt=""
        aria-hidden
        className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] top-0 left-0"
      />
      <Image
        src={DecorativeCorner}
        alt=""
        aria-hidden
        className="absolute 2xl:w-[200px] xl:w-[180px] lg:w-[160px] w-[140px] bottom-0 right-0 rotate-180"
      />
    </section>
  );
}

function CtaSection() {
  return (
    <section className="my-container flex flex-col lg:flex-row 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8">
      <div className="flex flex-col 2xl:gap-16 xl:gap-12 lg:gap-8 gap-8 lg:w-1/2 w-[min(100%,600px)] mx-auto">
        {/* cta */}
        <div className="border-1 border-primary rounded-lg relative text-center flex flex-col items-center 2xl:p-20 xl:p-18 lg:p-16 py-10  bg-primary-200">
          <h2 className="font-heading xl:text-4xl lg:text-3xl text-3xl">
          Here for You, Anytime
          </h2>
          <p className="xl:text-xl lg:text-lg text-lg text-black lg:mt-4 lg:mb-8 mt-3 mb-6 lg:w-full w-[min(85%,450px)]">
          You don’t have to figure it all out alone  — support is here, one click away.
          </p>
          <Button size="md" variant="primary" arrow>
            Book Now
          </Button>

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
        </div>
        {/* clinic photo */}
        <div className="border-1 border-primary rounded-lg lg:h-full h-40 relative overflow-hidden">
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
        </div>
      </div>
      {/* form */}
      <div className="border-1 border-primary rounded-lg lg:w-1/2 w-[min(100%,600px)] mx-auto 2xl:p-16 xl:p-14 lg:p-12 p-6">
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
      </div>
    </section>
  );
}
