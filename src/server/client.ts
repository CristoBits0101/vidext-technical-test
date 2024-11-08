// Import the type definition for the main application router
import { AppRouter } from '.'

// Import the function to create a TRPC React instance
import { createTRPCReact } from '@trpc/react-query'

// Create and export the TRPC React instance using the AppRouter type
export const trpc = createTRPCReact<AppRouter>()
