import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const formatLargeNumber = (number: number): string => {
  if (number >= 1_000_000_000) {
    const billions = (number / 1_000_000_000).toFixed(1);
    return `${billions}B`;
  } else if (number >= 1_000_000) {
    const millions = (number / 1_000_000).toFixed(1);
    return `${millions}M`;
  } else if (number >= 1_000) {
    const thousands = (number / 1_000).toFixed(1);
    return `${thousands}K`;
  } else {
    return number.toString();
  }
};

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - createdAt.getTime()) / 1000
  );

  const secondsInMinute = 60;
  const secondsInHour = 3600;
  const secondsInDay = 86400;
  const secondsInMonth = 2592000; // Approximate, as months can vary
  const secondsInYear = 31536000; // Approximate, ignoring leap years

  if (diffInSeconds < secondsInMinute) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < secondsInHour) {
    const minutes = Math.floor(diffInSeconds / secondsInMinute);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInDay) {
    const hours = Math.floor(diffInSeconds / secondsInHour);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInMonth) {
    const days = Math.floor(diffInSeconds / secondsInDay);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diffInSeconds < secondsInYear) {
    const months = Math.floor(diffInSeconds / secondsInMonth);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffInSeconds / secondsInYear);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  }
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
