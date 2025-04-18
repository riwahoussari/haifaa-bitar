import Appointlet from "@appointlet/appointlet.js";
import "@appointlet/appointlet.js/dist/appointlet.min.css";

export async function handleBooking() {
  const appointlet = new Appointlet("https://appt.link/meet-with-haifaa-bitar");
  await appointlet.openModal();
}
export async function handleBookingInPerson() {
  const appointlet = new Appointlet("https://appt.link/meet-with-haifaa-bitar/in-person-psychoanalytic-session");
  await appointlet.openModal();
}
export async function handleBookingOnline() {
  const appointlet = new Appointlet("https://appt.link/meet-with-haifaa-bitar/online-psychoanalytic-session");
  await appointlet.openModal();
}
