import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function compactNumberFormat(num: number, digits: number = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" }
  ];
  const absNum = Math.abs(num);
  const item = lookup.slice().reverse().find(item => absNum >= item.value);
  if (!item) {
    return num.toString();
  }
  const formattedValue = (num / item.value).toFixed(digits);
  const trimmed = formattedValue.replace(/\.0+$|(\.\d*[1-9])0+$/, '$1');
  return trimmed + item.symbol;
}
