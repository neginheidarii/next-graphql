import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import fetchPosts from "@/services/fetchPosts";
import PostListContainer from "@/components/PostListContainer";
import Provider from "@/providers/Provider";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts", ""],
    queryFn: () => fetchPosts(),
  });

  const dehydratedState = dehydrate(queryClient)

  return (
    <Provider>
      <HydrationBoundary state={dehydratedState}>
          <PostListContainer />
      </HydrationBoundary>

    </Provider>
  );
}
