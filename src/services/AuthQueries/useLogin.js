import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {login as loginApi} from "../apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const {mutate: login, isLoading} = useMutation({
    mutationFn: ({email, password}) => loginApi({email, password}),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      router.push("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return {login, isLoading};
}