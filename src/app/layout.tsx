'use client'

import './global.css'
import Sidebar from "@/components/sidebar/Sidebar";
import Map from "@/components/map/Map";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast";

// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>

        <main className='app'>
        <Sidebar>
          {children}
        </Sidebar>
        <Map/>
        {/*<User/>*/}
        </main>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-dark--0)",
              color: "var(--color-light--3)",
            },
          }}
        />
      </QueryClientProvider>
      </body>
    </html>
  )
}
