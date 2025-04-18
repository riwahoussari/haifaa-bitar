"use client";
import haifaaBitarLogo from "../../../public/HB-name.png";
// import haifaaBitarLogo from "../../../public/HB-original-logo.png";
import Button from "../global/Button";
import { useEffect, useRef, useState } from "react";
import BurgerMenuSvg from "./BurgerMenuSvg";
import MobileNavMenu from "./MobileNavMenu";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import HoverLink from "./HoverLink";
import Image from "next/image";
import { TransitionLink } from "../global/TransitionLink";
import { handleBooking } from "../global/BookingModal";

const PAGES = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About Me",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [hasMounted, setHasMounted] = useState(false);
  const [hideNavOnScroll, setHideNavOnScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const burgerBtnRef = useRef<HTMLDivElement>(null);

  // Triggers on mount slide down animation for navbar
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Hide navbar when scrolling down, show when scrolling up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setHideNavOnScroll(latest > previous && latest > 50);
  });

  // Close mobile menu if user clicks outside the menu
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node) &&
        !burgerBtnRef.current?.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <motion.header
      className={
        "bg-bg-color/50  sticky top-0 z-10 w-full border-b border-[rgba(0,0,0,0.2)] text-black lg:text-base " +
        (mobileMenuOpen ? "sm:backdrop-blur-md" : " backdrop-blur-md")
      }
      initial={{ y: "-100%" }}
      animate={{ y: hideNavOnScroll && !mobileMenuOpen ? "-100%" : "0%" }}
      transition={{
        ease: "easeInOut",
        duration: hasMounted ? 0.3 : 0.7,
        delay: hasMounted ? 0 : 0.3,
      }}
    >
      <div className="my-container flex items-center justify-between py-3">
        {/* LOGO */}
        <TransitionLink href="/">
          <Image
            src={haifaaBitarLogo}
            alt="Arthyl"
            className="z-1 w32 w-24 relative "
          />
        </TransitionLink>

        {/* Big Screen Navigation Links */}
        <nav className="text-lg absolute bottom-0 left-1/2 top-0 hidden -translate-x-1/2 items-center gap-4 lg:flex lg:gap-8">
          {PAGES.map((page, i) => (
            <HoverLink href={page.link} key={i}>
              {page.name}
            </HoverLink>
          ))}
        </nav>

        {/* CTA Button & Mobile Menu Toggle */}
        <div className="z-1 relative flex items-center gap-4">
          {/* CTA */}
          <TransitionLink
            className="hidden sm:inline"
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Button arrow={false} size="md" variant="secondary">
              Reach Out
            </Button>
          </TransitionLink>

          <Button onClick={handleBooking} arrow={false} size="md">
            Book Now
          </Button>

          {/* Mobile Burger Menu */}
          <div
            ref={burgerBtnRef}
            className="w-7 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <BurgerMenuSvg isOpen={mobileMenuOpen} />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <MobileNavMenu
          ref={mobileMenuRef}
          isOpen={mobileMenuOpen}
          setIsOpen={setMobileMenuOpen}
        />
      </div>
    </motion.header>
  );
}
