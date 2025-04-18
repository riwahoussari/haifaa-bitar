"use client";

import "@appointlet/appointlet.js/dist/appointlet.min.css";
import { HTMLAttributes, ReactNode } from "react";

type ButtonProps = { children: ReactNode } & HTMLAttributes<HTMLDivElement>;

export function BookingButton({ children, ...props }: ButtonProps) {
  async function handleClick() {
    const Appointlet = (await import("@appointlet/appointlet.js")).default;
    const appointlet = new Appointlet(
      "https://appt.link/meet-with-haifaa-bitar"
    );
    await appointlet.openModal();
  }

  return (
    <div {...props} onClick={handleClick}>
      {children}
    </div>
  );
}

export function BookingButtonInPerson({ children, ...props }: ButtonProps) {
  async function handleClick() {
    const Appointlet = (await import("@appointlet/appointlet.js")).default;
    const appointlet = new Appointlet(
      "https://appt.link/meet-with-haifaa-bitar/in-person-psychoanalytic-session"
    );
    await appointlet.openModal();
  }

  return (
    <div {...props} onClick={handleClick}>
      {children}
    </div>
  );
}

export function BookingButtonOnline({ children, ...props }: ButtonProps) {
  async function handleClick() {
    const Appointlet = (await import("@appointlet/appointlet.js")).default;
    const appointlet = new Appointlet(
      "https://appt.link/meet-with-haifaa-bitar/online-psychoanalytic-session"
    );
    await appointlet.openModal();
  }

  return (
    <div {...props} onClick={handleClick}>
      {children}
    </div>
  );
}
