// Import clsx for conditional class names and type support
import { clsx, type ClassValue } from 'clsx'

// Import twMerge to merge Tailwind class names
import { twMerge } from 'tailwind-merge'

// Combine and merge class names
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
