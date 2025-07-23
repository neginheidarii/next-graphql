import fetchPost from "@/services/fetchPost";
import DropdownBtn from "./DropdownBtn";

const PostList = async () => {
  const data = await fetchPost();
  const posts = data.posts;

  if (!data) return <p>No posts available.</p>;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <DropdownBtn />
      {posts?.map((post: any) => (
        <div key={post.id} className="mb-4 border p-4 rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-sm text-gray-600">
            Categories: {post.category?.map((cat: any) => cat.name).join(", ")}
          </p>
        </div>
      ))}
    </main>
  );
};

export default PostList;
