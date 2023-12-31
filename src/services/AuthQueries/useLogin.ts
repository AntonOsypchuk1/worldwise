import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { login as loginApi } from "../apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      redirect("/");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { login, isLoading };
}
