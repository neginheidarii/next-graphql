import { useQuery } from "@tanstack/react-query";
import fetchCategories from "@/services/fetchCategories";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
  });
};
