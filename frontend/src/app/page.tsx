import PostList from "@/components/PostList";
import fetchPost from "@/services/fetchPosts";
import Dropdown from "@/components/DropdownBtn";

export default async function Home() {
  const data = await fetchPost();
  const posts = data.posts;

  return (
      <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Home</h1>
      
      <div className="mb-6">
        <Dropdown />
      </div>

      <PostList posts={posts}/>
    </main>)
;
}
