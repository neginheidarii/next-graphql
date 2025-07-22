import fetchPost from "@/services/fetchPost";


// Define the expected shape of data
type Post = {
  id: string;
  title: string;
  content: string;
  category: {
    name: string;
  };
};

type PostsResponse = {
  posts: Post[];
};

export default async function Home() {

const data = (await fetchPost()) as PostsResponse;
  const posts = data.posts;


  if(!posts){
    return <p>No post was found</p>
  }



  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts?.map((post:any) =>(
        <div key={post.id} className="mb-4 border p-4 rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-sm text-gray-600">
            Category: {post.category?.name}
          </p>
        </div>
      ))}
    </main>

  );
}
