'use client'

import Sidebar from "@/components/sidebar/Sidebar";
import Map from "@/components/map/Map";
import {Toaster} from "react-hot-toast";
import RequireAuth from "@/components/utils/RequireAuth";
import User from "@/components/user/User";

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <main className='app'>
        <RequireAuth>
          <Sidebar>
            {children}
          </Sidebar>
          <Map/>
          <User/>
        </RequireAuth>
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
    </>
  )
}