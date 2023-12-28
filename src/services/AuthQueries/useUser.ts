import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/apiAuth";
import { IUserWithSession } from "@/types/user.interface";

interface UseUserHook {
  isLoading: boolean;
  user: IUserWithSession | null | undefined;
}

export function useUser(): UseUserHook {
  const { isLoading, data: user } = useQuery<IUserWithSession | null>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user };
}
