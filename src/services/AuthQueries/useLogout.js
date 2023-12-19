import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {logout as logoutApi} from "@/services/apiAuth";

export function useLogout() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const {mutate: logout, isLoading} = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/login")
    }
  })

  return { logout, isLoading };
}