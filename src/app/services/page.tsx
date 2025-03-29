import PageTitle from "@/components/global/PageTitle";
import Image from "next/image";
import Sparkle from "../../assets/sparkle.svg";
import IllustrationOnlineTherapy from "../../../public/illustration-online-therapy.svg";
import IllustrationClinicalTherapy from "../../../public/illustration-clinical-therapy.svg";
import ArrowSvg from "@/components/global/ArrowSvg";

export default function ServicesPage() {
  return (
    <main className="space-y-40 mb-40">
      <PageTitle>Services</PageTitle>
      <Services />
    </main>
  );
}

function Services() {
  return (
    <section className="my-container space-y-60">
      {/* Online Therapy */}
      <div className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* title */}
        <div className="flex mb-8 xl:gap-6 lg:gap-5 gap-4">
          <Image
            src={Sparkle}
            alt=""
            aria-hidden
            className="xl:w-[60px] lg:w-12 w-9"
          />
          <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
            Online Therapy Sessions
          </h2>
        </div>

        {/* row 1 */}
        <div className="lg:grid grid-cols-2 justify-items-center flex flex-col-reverse w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
          {/* text */}
          <div className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-1">
            <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
              Online therapy offers the same level of professional support as
              in-person sessions, allowing you to receive guidance from the
              comfort of your home. Whether you’re struggling with anxiety,
              depression, trauma, OCD, or personal challenges, online therapy
              provides a safe space to explore your emotions and develop deeper
              self-awareness.
            </p>
          </div>

          {/* illustration */}
          <Image
            className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0"
            src={IllustrationOnlineTherapy}
            alt="Illustration of online therapy session"
          />
        </div>

        {/* row 2 */}
        <div className="lg:grid grid-cols-3 flex flex-col-reverse w-[min(96%,600px)] lg:w-full mx-auto  2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
          {/* Button */}
          <a href="#" className="group">
            <div className="flex justify-center items-center bg-primary-200 rounded-lg border-1 border-primary col-span-1 h-full group-hover:bg-primary group-hover:text-white duration-200 ease-in-out">
              <p className="font-heading xl:text-4xl lg:text-3xl text-2xl text-center py-4">
                Book A Session{" "}
                <ArrowSvg
                  className="stroke-primary xl:w-8 lg:w-7 w-6 inline-block ms-2 group-hover:translate-x-3  group-hover:stroke-white duration-200 ease-in-out"
                  strokeWidth={1.8}
                />
              </p>
            </div>
          </a>

          {/* Checklist */}
          <div className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-2">
            <p className="2xl:text-2xl xl:text-xl lg:text-lg text-base leading-[120%] font-semibold 2xl:space-y-8 xl:space-y-7 lg:space-y-6 space-y-4">
              <span className="inline-block">
                ✔ Convenient and accessible from anywhere
              </span>
              <br />
              <span className="inline-block">
                ✔ Confidential and secure platform
              </span>
              <br />
              <span className="inline-block">
                ✔ Ideal for individuals with busy schedules or limited mobility
              </span>
              <br />
              <span className="inline-block">
                ✔ Effective for managing stress, anxiety, depression, and trauma
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Clinical Therapy */}
      <div className="flex flex-col 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
        {/* title */}
        <div className="flex mb-8 xl:gap-6 lg:gap-5 gap-4">
          <Image
            src={Sparkle}
            alt=""
            aria-hidden
            className="xl:w-[60px] lg:w-12 w-9"
          />
          <h2 className="font-heading xl:text-6xl lg:text-5xl text-[max(5vw,36px)] leading-[100%]">
            Clinical Therapy Sessions
          </h2>
        </div>

        {/* row 1 */}
        <div className="lg:grid grid-cols-2 justify-items-center flex flex-col w-[min(96%,600px)] lg:w-full mx-auto 2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
          {/* illustration */}
          <Image
            className="lg:w-[500px] w-full max-w-[400px] mx-auto lg:mx-0"
            src={IllustrationClinicalTherapy}
            alt="Illustration of online therapy session"
          />

          {/* text */}
          <div className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-1">
            <p className="xl:text-xl lg:text-lg text-base leading-[160%] opacity-80">
              For those who prefer face-to-face interaction, in-clinic therapy
              sessions provide a private and comfortable setting to explore
              personal challenges. Meeting in person allows for a deeper
              therapeutic connection, helping you process emotions, overcome
              difficulties, and gain clarity in your life.
            </p>
          </div>
        </div>

        {/* row 2 */}
        <div className="lg:grid grid-cols-3 flex flex-col w-[min(96%,600px)] lg:w-full mx-auto  2xl:gap-12 xl:gap-10 lg:gap-8 gap-8">
          {/* Checklist */}
          <div className="rounded-lg border-1 border-primary 2xl:p-8 xl:p-7 lg:p-6 p-4 col-span-2">
            <p className="2xl:text-2xl xl:text-xl lg:text-lg text-base leading-[120%] font-semibold 2xl:space-y-8 xl:space-y-7 lg:space-y-6 space-y-4">
              <span className="inline-block">
                ✔ Personalized, in-depth therapeutic experience
              </span>
              <br />
              <span className="inline-block">
                ✔ Support for trauma, anxiety, depression, OCD, and personal
                growth
              </span>
              <br />
              <span className="inline-block">
                ✔ A dedicated space for self-exploration and healing
              </span>
              <br />
              <span className="inline-block">
                ✔ Face-to-face interaction for a stronger therapeutic bond
              </span>
            </p>
          </div>

          {/* Button */}
          <a href="#" className="group">
            <div className="flex justify-center items-center bg-primary-200 rounded-lg border-1 border-primary col-span-1 h-full group-hover:bg-primary group-hover:text-white duration-200 ease-in-out">
              <p className="font-heading xl:text-4xl lg:text-3xl text-2xl text-center py-4">
                Book A Session{" "}
                <ArrowSvg
                  className="stroke-primary xl:w-8 lg:w-7 w-6 inline-block ms-2 group-hover:translate-x-3  group-hover:stroke-white duration-200 ease-in-out"
                  strokeWidth={1.8}
                />
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
