import { useMutation, useQueryClient } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { signup as signupApi } from "../apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);

      toast.success("Account successfully created.");
      redirect("/");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
