"use client"
import { PostsResponse } from "@/types/post";
import { useState } from "react";

const PostList = ({ posts }: PostsResponse) => {
      console.log("Posts in PostList:", posts);


  return (
    <>
      {posts?.map((post: any) => (
        <div key={post.id} className="mb-4 border p-4 rounded">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p>{post.content}</p>
          <p className="text-sm text-gray-600">
            Categories: {post.category?.map((cat: any) => cat.name).join(", ")}
          </p>
        </div>
      ))}
    </>
  );
};

export default PostList;
