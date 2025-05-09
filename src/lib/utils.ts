import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMediaUrl = (path: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  return `${baseUrl}${path}`;
};
