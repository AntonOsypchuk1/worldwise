'use client'

import {permanentRedirect, redirect} from "next/navigation";

const Home = () => {
  permanentRedirect('/cities');
}

export default Home;