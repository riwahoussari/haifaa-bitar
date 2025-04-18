import { ButtonHTMLAttributes } from "react";
import ArrowSvg from "./ArrowSvg";

type ButtonProps = {
  size?: "md" | "lg";
  variant?: "primary" | "secondary";
  arrow?: boolean;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  size = "md",
  variant = "primary",
  arrow = false,
  children,
  ...props
}: ButtonProps) {
  // button styles
  const baseStyles =
    "group/btn martel border-1 border-primary rounded-md duration-200 ease-in-out cursor-pointer flex justify-between items-center";

  const colorStyles =
    (variant === "primary" &&
      "text-white bg-primary hover:bg-transparent hover:text-primary") ||
    (variant === "secondary" &&
      "text-primary hover:bg-primary hover:text-white group-hover/card:!bg-white group-hover/card:!text-primary");

  const sizeStyles =
    (size === "md" &&
      "px-[20px] py-[4px] text-[16px] gap-[10px] lg:px-[25px] lg:py-[5px]") ||
    (size === "lg" &&
      "lg:px-[40px] lg:py-[8px] lg:text-[22px] lg:gap-[20px] px-[30px] py-[6px] text-[20px] gap-[16px]");

  // arrow styles
  const arrowBaseStyles =
    "duration-200 ease-in-out group-hover/btn:translate-x-[25%]";

  const arrowSizeStyles =
    (size === "md" && "w-[18px] lg:w-[20px]") || (size === "lg" && "w-[24px]");

  const arrowColorStyles =
    (variant === "primary" && "stroke-white group-hover/btn:stroke-primary") ||
    (variant === "secondary" &&
      "stroke-primary group-hover/btn:stroke-white group-hover/card:stroke-primary");

  return (
    <button
      {...props}
      className={[baseStyles, colorStyles, sizeStyles].join(" ")}
    >
      {children}
      {arrow && (
        <ArrowSvg
          className={[arrowBaseStyles, arrowSizeStyles, arrowColorStyles].join(
            " "
          )}
          strokeWidth={(size === "md" && 2) || (size === "lg" && 1.7) || 1}
        />
      )}
    </button>
  );
}
