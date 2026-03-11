import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRunTime(movieMinutes: number) {
  let runtime;
  const hours = Math.floor(movieMinutes / 60);
  const minutesRemain = movieMinutes % 60;

  if (minutesRemain > 0) {
    runtime = `${hours}h ${minutesRemain}min`;
  } else {
    runtime = `${hours}h`;
  }

  return runtime;
}
