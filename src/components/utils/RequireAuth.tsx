'use client'

import {FC, PropsWithChildren} from "react";
import {useUser} from "@/services/AuthQueries/useUser";
import Spinner from "@/components/ui/spinner/Spinner";
import {redirect} from "next/navigation";

const RequireAuth: FC<PropsWithChildren> = ({ children }) => {
  const { user, isLoading } = useUser()

  if (isLoading) return <Spinner/>

  if (!user) redirect('/login')

  return children;
};

export default RequireAuth;