import RequireNotAuth from "@/components/utils/RequireNotAuth";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import EmptyMap from "@/components/map/EmptyMap";

export const metadata = {
  title: 'Worldwise - Authorize',
  description: 'Authorize to your personal account',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="app">
      <RequireNotAuth>
        <Sidebar>{children}</Sidebar>
        <EmptyMap />
      </RequireNotAuth>
    </main>
  );
}
