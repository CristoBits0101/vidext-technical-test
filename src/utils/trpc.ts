// Import the httpBatchLink from the tRPC client library to handle batched requests
import { httpBatchLink } from '@trpc/client'

// Import the function to create a tRPC client for Next.js
import { createTRPCNext } from '@trpc/next'

// Import the type definition for the app's router from the server-side code
import type { AppRouter } from '@/server'

// Function to determine the base URL for API requests
function getBaseUrl() {
  // If running in the browser, return an empty string (use the same origin)
  if (typeof window !== 'undefined') return ''

  // If running in a Vercel environment, return the URL defined by Vercel
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  // If none of the above conditions are met, fall back to localhost with a port
  return `http://localhost:${process.env.PORT ?? 3000}`
}

// Create and export the tRPC client configuration for use in the Next.js app
export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      // Configure the tRPC client with a link for batching requests
      links: [
        httpBatchLink({
          // Set the API endpoint URL
          url: `${getBaseUrl()}/api/trpc`, 
        }),
      ],
    }
  },
  // Disable server-side rendering for this tRPC setup
  ssr: false,
})
