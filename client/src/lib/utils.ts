import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function preventScroll() {
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  
  // Fix for mobile viewport height issues
  function setVh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Set initially and on resize
  setVh();
  window.addEventListener('resize', setVh);
  
  return () => {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
    window.removeEventListener('resize', setVh);
  };
}
