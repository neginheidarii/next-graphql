import fetchPosts from "@/services/fetchPosts";
import Dropdown from "@/components/Dropdown";
import PostList from "@/components/PostList";

export default async function Home({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const categoryId = searchParams?.category;
  const data = await fetchPosts(categoryId);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Home</h1>
      <Dropdown selectedCategoryId={categoryId} />
      <div className="m-4"></div>
      <PostList posts={data.posts} />
    </main>
  );
}
