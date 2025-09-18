import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const preferReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function withBasePath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

  if (!basePath) {
    return path;
  }

  const normalizedBase = `/${basePath.replace(/^\/+|\/+$/g, "")}`;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${normalizedBase}${normalizedPath}`;
}
