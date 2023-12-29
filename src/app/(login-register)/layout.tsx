import RequireNotAuth from "@/components/utils/RequireNotAuth";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import EmptyMap from "@/components/map/EmptyMap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="app">
      <RequireNotAuth>
        <Sidebar isAuth={false}>{children}</Sidebar>
        <EmptyMap />
      </RequireNotAuth>
    </main>
  );
}
