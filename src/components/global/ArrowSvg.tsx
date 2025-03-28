import { HTMLAttributes } from "react";

type ArrowSvgProps = {
  strokeWidth?: number;
  className?: string;
};

export default function ArrowSvg({
  strokeWidth = 1,
  className = 'stroke-black',
}: ArrowSvgProps) {
  return (
    <svg
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        id="Vector 1"
        d="M19 21L29 11L19 1"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        id="Vector 1"
        d="M29 11H1"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
