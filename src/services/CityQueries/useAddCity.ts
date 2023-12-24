import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCity as addCityApi } from "../apiCities";
import toast from "react-hot-toast";

export function useAddCity() {
  const queryClient = useQueryClient();

  const { mutate: addCity, isLoading } = useMutation({
    mutationFn: addCityApi,
    onSuccess: () => {
      toast.success("New city is in the list. Congratulations!");
      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err: Error) => toast.error(err.message),
  });

  return { addCity, isLoading };
}
