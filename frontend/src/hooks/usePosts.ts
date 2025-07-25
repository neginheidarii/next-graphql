import { useQuery } from "@tanstack/react-query";
import fetchPosts from "@/services/fetchPosts";

export const usePosts = (categoryId?: string) => {
  return useQuery({
    queryKey: ["posts", categoryId],
    queryFn: () => fetchPosts(categoryId),
  });
};
