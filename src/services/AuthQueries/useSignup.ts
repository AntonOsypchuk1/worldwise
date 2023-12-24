import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { signup as signupApi } from "../apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      toast.success("Account successfully created.");
      router.push("/");
    },
    onError: (err: Error) => {
      toast.error(err.message);
    },
  });

  return { signup, isLoading };
}
