'use client'

// Import for setting up batched HTTP request links for tRPC client
import { httpBatchLink } from '@trpc/client'

// Imports for managing server state and caching in a React application
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import of the configured tRPC client for making API calls
import { trpc } from '@/server/client'

// React hook for managing local component state
import { useState } from 'react'

export default function TrpcProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
