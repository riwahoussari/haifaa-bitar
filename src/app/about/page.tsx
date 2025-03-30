import PageTitle from "@/components/global/PageTitle";
import HaifaaBitarPortrait from "../../../public/haifaa-portrait-cropped.jpg";
import Image from "next/image";
import Sparkle from "../../assets/sparkle.svg";
import Button from "@/components/global/Button";

export default function AboutPage() {
  return (
    <>
      <PageTitle>About Me</PageTitle>
      <About1 />
      <About2 />
    </>
  );
}

function About1() {
  return (
    <section className="my-container flex flex-col md:flex-row justify-between items-center xl:gap-20 lg:gap-14 gap-10 overflow-hidden">
      {/* image */}
      <div className="relative md:w-[33%] w-[min(80%,250px)] max-h-dvh">
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
      </div>

      {/* text */}
      <div className="md:w-[66%] md:max-w-[unset] max-w-[450px] text-center md:text-start">
        {/* stars */}
        <div className="flex gap-5 justify-center md:justify-start">
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
        </div>

        {/* Quote */}
        <p className="font-heading xl:text-5xl lg:text-4xl text-3xl leading-[1.2] mt-6 2xl:mb-32 lg:mb-24 mb-14">
          “Understanding oneself and one's own story is the most powerful tool a
          human can have.”
        </p>

        {/* Stats */}
        <div className="md:grid  md:grid-cols-2 flex md:justify-between justify-around flex-wrap gap-x-10 gap-y-14 md:gap-0">
          <div className="space-y-2">
            <p className="font-heading xl:text-7xl lg:text-6xl text-5xl">
              {new Date().getFullYear() - 2012}+
            </p>
            <p className="xl:text-xl lg:text-lg text-lg">Years of Experience</p>
          </div>
          <div className="space-y-2">
            <p className="font-heading xl:text-7xl lg:text-6xl text-5xl">
              1000+
            </p>
            <p className="xl:text-xl lg:text-lg text-lg">Sessions Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function About2() {
  return (
    <section className="my-container xl:space-y-44 lg:space-y-36 space-y-28">
      {/* About Me */}
      <div className="xl:w-4xl lg:w-3xl md:w-2xl">
        <h2 className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4">
          About Me
        </h2>
        <p className="xl:text-xl lg:text-lg text-lg text-black">
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
        </p>
      </div>

      {/* Education */}
      <div className="xl:w-4xl lg:w-3xl md:w-2xl ">
        <h2 className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4">
          Education
        </h2>
        <div className="divide-black divide-y  xl:text-xl lg:text-lg text-lg text-black">
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full ">
              <p className="md:col-span-3 ">Training in Psychotherapy</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-70 md:opacity-100"></p>
            </div>
            <p>2024</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">
                Training in Lacanian Psychoanalysis
              </p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-70 md:opacity-100"></p>
            </div>
            <p>2019</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">Masters in Clinical Psychology</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-70 md:opacity-100">
                Lebanese University
              </p>
            </div>
            <p>2000</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-3 ">Bachelor's of Psychology</p>
              <p className="md:col-span-2 md:text-lg text-sm opacity-70 md:opacity-100">
                Lebanese University
              </p>
            </div>
            <p>2000</p>
          </div>
        </div>
      </div>

      {/* Certification */}
      <div className="xl:w-4xl lg:w-3xl md:w-2xl ">
        <h2 className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4">
          Certification
        </h2>
        <div className="divide-black divide-y  xl:text-xl lg:text-lg text-lg text-black">
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full ">
              <p className="md:col-span-2 ">DHA License</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-70 md:opacity-100">
                Forum Du Champ Lacanien Du Liban
              </p>
            </div>
            <p>2024</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">MOH License</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-70 md:opacity-100">
                Lebanese Ministry of Health
              </p>
            </div>
            <p>2019</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">Member of LOPsy</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-70 md:opacity-100">
                Lebanese Order of Psychologists
              </p>
            </div>
            <p>2000</p>
          </div>
          <div className="flex justify-between gap-14 py-3">
            <div className="md:grid md:grid-cols-5 md:w-full">
              <p className="md:col-span-2 ">Member of FCLL</p>
              <p className="md:col-span-3 md:text-lg text-sm opacity-70 md:opacity-100">
                Forum Du Champ Lacanien Du Liban
              </p>
            </div>
            <p>2000</p>
          </div>
        </div>
      </div>
      

      {/* What To Expect */}
      <div className="xl:w-4xl lg:w-3xl md:w-2xl">
        <h2 className="font-heading xl:text-5xl lg:text-4xl text-4xl xl:mb-6 lg:mb-5 mb-4">
          What To Expect
        </h2>
        <p className="xl:text-xl lg:text-lg text-lg text-black xl:mb-6 lg:mb-5 mb-4">
          Therapy is a collaborative journey. Through thoughtful dialogue and
          analysis, I guide patients toward self-discovery, emotional clarity,
          and personal transformation. My goal is to provide a safe and
          supportive space where individuals can explore their inner world,
          overcome challenges, and reclaim control over their lives.
        </p>
        <Button variant="secondary" arrow size="md">Book A Session</Button>
      </div>
    </section>
  );
}
