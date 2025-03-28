import { AnimatePresence, motion } from "motion/react";
// import { TransitionLink } from "../global/TransitionLink";
import { MouseEventHandler } from "react";
import Link from "next/link";
import SparkleSvg from "../../assets/sparkle.svg";
import Image from "next/image";

const PAGES = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Sevices",
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

export default function MobileNavMenu({
  isOpen,
  setIsOpen,
  ref,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          ref={ref} // Attach the ref to track clicks outside
          variants={menuSlide}
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-dark-beige/50 absolute left-0 right-0 top-0 z-0 pb-6 pt-20 text-black shadow-lg backdrop-blur-xl lg:hidden"
        >
          <nav>
            {PAGES.map((page, i) => (
              <MobileNavLink
                key={page.link} // Use unique key for better React reconciliation
                index={i}
                href={page.link}
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {page.name}
              </MobileNavLink>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Motion animation variants for the menu slide-in effect
const menuSlide = {
  initial: { y: "-100%" }, // Start off-screen above
  enter: { y: "0%", transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { y: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

// Component for individual navigation links
function MobileNavLink({
  index,
  onClick,
  ...props
}: {
  index: number;
  onClick: MouseEventHandler<HTMLDivElement>;
} & React.ComponentProps<typeof Link>) {
  return (
    <motion.div
      custom={PAGES.length - index} // Pass custom value for staggered animation
      variants={linkSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={onClick}
    >
      {/* <TransitionLink */}
      <Link
        {...props}
        className={`my-container flex justify-end items-end text-primary gap-[5%] py-6 text-3xl `}
      >
        {props.children}
        <Image src={SparkleSvg} alt="" aria-hidden className="w-8" />
      </Link>
      {/* </TransitionLink> */}
    </motion.div>
  );
}

// Motion animation variants for individual link animations
const linkSlide = {
  initial: { y: "-200%" }, // Start off-screen above
  enter: (i: number) => ({
    y: "0%", // Animate to normal position
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1 * i, // Staggered effect for each link
    },
  }),
};
