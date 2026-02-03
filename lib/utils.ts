import { clsx, type ClassValue } from "clsx";
import { format, parse } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Note: Utility Function for getting message from error
export function getErrorMessage(error: unknown): string {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } else if (typeof error === "string") {
    message = error;
  } else {
    message = "Something went wrong";
  }

  return message;
}

// Note: Given Date string is assumed to follow InputFormatStr
export function dateNormalizer({
  date,
  inputFormatStr,
  outputFormatStr,
}: {
  date: string;
  inputFormatStr: string;
  outputFormatStr: string;
}): string {
  const parsedDate = parse(date, inputFormatStr, new Date());
  return format(parsedDate, outputFormatStr);
}

// Note: Get HEXCODE for Strapi Color
export function getBackgroundHexCode(literal?: string) {
  switch (literal) {
    case "White":
      return "#FFFFFF";
    case "Light Grey":
      return "#F5F6FA";
    default:
      return undefined;
  }
}
