import { type ClassValue, clsx } from "clsx";
import { Poppins } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const font2 = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const fontWrapper = (data: ClassValue) => {
  return cn(data, font2.className);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
