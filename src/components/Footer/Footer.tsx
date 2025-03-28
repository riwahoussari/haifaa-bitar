import Image from "next/image";
import DecorativeLine from "../../assets/decorative-line.svg";
import WhatsappSvg from "./Icons/WhatsappSvg";
import FacebookSvg from "./Icons/FacebookSvg";
import InstagramSvg from "./Icons/InstagramSvg";
import ArrowSvg from "../global/ArrowSvg";
import Link from "next/link";
import HoverLink from "../Navbar/HoverLink";

export default function Footer() {
  return (
    <footer className="bg-primary-200 border-t-1 border-primary flex flex-col justify-between gap-20 pt-16 min-h-dvh">
      {/* decorative lines */}
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

      {/* content */}
      <div className="my-container flex flex-col lg:flex-row justify-between items-center lg:items-start gap-20">
        {/* Links */}
        <div className="lg:w-1/2 w-[min(100%,600px)] flex flex-wrap gap-16 justify-center lg:justify-start">
          <div className="lg:w-[calc(50%-32px)] w-[250px] text-center lg:text-start">
            <p className="font-heading border-b-1 border-primary 2xl:text-3xl lg:text-2xl text-2xl mb-5 ">
              Menu
            </p>
            <div className="flex flex-col gap-4 2xl:text-2xl lg:text-xl text-lg">
              <div className="opacity-70 hover:opacity-100 duration-200 ease-in-out">
                <HoverLink href="/">Home</HoverLink>
              </div>
              <div className="opacity-70 hover:opacity-100 duration-200 ease-in-out">
                <HoverLink href="/services">Services</HoverLink>
              </div>
              <div className="opacity-70 hover:opacity-100 duration-200 ease-in-out">
                <HoverLink href="/about">About Me</HoverLink>
              </div>
              <div className="opacity-70 hover:opacity-100 duration-200 ease-in-out">
                <HoverLink href="/contact">Contact</HoverLink>
              </div>
            </div>
          </div>
          <div className="lg:w-[calc(50%-32px)] w-[250px] text-center lg:text-start">
            <p className="font-heading border-b-1 border-primary 2xl:text-3xl lg:text-2xl text-2xl mb-5 ">
              Contact
            </p>
            <div className="flex flex-col gap-4 2xl:text-2xl lg:text-xl text-lg">
              <a
                className="opacity-70 hover:opacity-100 duration-200 ease-in-out"
                href="https://wa.me/96171123123"
              >
                +961 71 123 123
              </a>
              <a
                className="opacity-70 hover:opacity-100 duration-200 ease-in-out"
                href="mailto:contact@haifaabitar.com"
              >
                contact@haifaabitar.com
              </a>
            </div>
          </div>
          <div className="lg:w-[calc(50%-32px)] w-[250px] text-center lg:text-start">
            <p className="font-heading border-b-1 border-primary 2xl:text-3xl lg:text-2xl text-2xl mb-5 ">
              Location
            </p>
            <div className="flex flex-col gap-4 opacity-70 2xl:text-2xl lg:text-xl text-lg">
              <p>Floor, Building, Street, City, Country</p>
            </div>
          </div>
        </div>

        {/* google map */}
        <div className="lg:w-1/2 w-[min(100%,600px)]">
          <p className="[word-spacing:1px] mb-2">
            Open <span className="font-semibold">Monday </span>
            <ArrowSvg
              className="w-3 stroke-primary inline-block"
              strokeWidth={2.4}
            />
            <span className="font-semibold"> Friday</span>
          </p>
          <div className="border-1 border-primary rounded-lg overflow-hidden h-72">
            <iframe
              title="clinic location on google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5460737549797!2d35.5392453!3d33.8755875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f173955f4d9a7%3A0x19b0ad8788bdf8d2!2sMario%20Abboud!5e0!3m2!1sen!2slb!4v1713796655465!5m2!1sen!2slb"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-8 justify-center">
        <a target="_blank" href="https://wa.me/96171123123">
          <WhatsappSvg />
        </a>
        <a target="_blank" href="https://instagram.com">
          <InstagramSvg />
        </a>
        <a target="_blank" href="https://facebook.com">
          <FacebookSvg />
        </a>
      </div>

      {/* copyrights */}
      <div className="my-container flex justify-between pb-6 opacity-50 lg:text-base text-sm">
        <p>
          &copy; 2025 Haifaa Bitar <br />
          All Rights Reserved
        </p>

        <p>
          Created By <br />{" "}
          <a
            target="_blank"
            href="https://instagram.com/riwahoussari34"
            className="underline hover:[text-decoration:none] "
          >
            Riwa Houssari
          </a>
        </p>
      </div>
    </footer>
  );
}
