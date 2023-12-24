import {useMutation, useQueryClient} from "@tanstack/react-query";
import {deleteCity as deleteCityApi} from "../apiCities";
import toast from "react-hot-toast";

export function useDeleteCity() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCity } = useMutation({
    mutationFn: deleteCityApi,
    onSuccess: () => {
      toast.success("City successfully deleted");

      queryClient.invalidateQueries({
        queryKey: ["cities"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCity };
}