import Sidebar from "@/components/sidebar/Sidebar";
import Map from "@/components/map/Map"

export default function Home() {
  return (
    <main className="app">
      <Sidebar/>
      <Map/>
      {/*<User/>*/}
    </main>
  )
}
