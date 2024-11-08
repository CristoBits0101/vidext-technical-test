// Import the app's main router from the server-side code
import { appRouter } from '@/server'

// Import the request handler from tRPC for handling fetch requests
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

// Define the handler function for handling incoming requests
const handler = (req: Request) => {
  return fetchRequestHandler({
    // Specify the API endpoint for tRPC
    endpoint: '/api/trpc',
    // Provide the main router for the tRPC server
    router: appRouter,
    // Pass the incoming request to the handler
    req,
    // Create an empty context (can be customized as needed)
    createContext: () => ({}),
  })
}

// Export the handler for both GET and POST HTTP methods
export { handler as GET, handler as POST }
