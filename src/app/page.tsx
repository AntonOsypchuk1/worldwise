'use client'

import {redirect} from "next/navigation";
import {useUser} from "@/services/AuthQueries/useUser";

const Home = () => {
  const {user, isLoading} = useUser();

  if (user) {
    return redirect('/cities')
  } else {
    return redirect('/login')
  }
}

export default Home;