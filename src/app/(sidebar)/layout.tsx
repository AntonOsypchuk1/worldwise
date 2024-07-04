import Sidebar from "@/components/sidebar/Sidebar";
import Map from "@/components/map/Map";
import RequireAuth from "@/components/utils/RequireAuth";
import User from "@/components/user/User";
import EmptyMap from "@/components/map/EmptyMap";

export const metadata = {
  title: "Worldwise",
  description: "Note your travel destinations here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="app">
      <RequireAuth>
        <Sidebar>{children}</Sidebar>
        <EmptyMap>
          <Map />
        </EmptyMap>
        <User />
      </RequireAuth>
    </main>
  );
}
