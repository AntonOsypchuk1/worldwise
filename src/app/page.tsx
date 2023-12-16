'use client'

import CityList from "@/components/city/city-list/CityList";
import {useRouter} from "next/navigation";

const Home = () => {
  const router = useRouter()

  router.push('/cities');
}

export default Home;