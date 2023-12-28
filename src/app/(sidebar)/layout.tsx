"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import Map from "@/components/map/Map";
import { Toaster } from "react-hot-toast";
import RequireAuth from "@/components/utils/RequireAuth";
import User from "@/components/user/User";
import EmptyMap from "@/components/map/EmptyMap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="app">
        <RequireAuth>
          <Sidebar isAuth={true}>{children}</Sidebar>
          <EmptyMap>
            <Map />
          </EmptyMap>
          <User />
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
  );
}
