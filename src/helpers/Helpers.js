import { Timestamp } from "firebase/firestore";

export function timestampToDate({ seconds, nanoseconds }) {
  // Convertir segundos y nanosegundos a milisegundos
  const milliseconds = seconds * 1000 + nanoseconds / 1000000;
  return new Date(milliseconds);
}
