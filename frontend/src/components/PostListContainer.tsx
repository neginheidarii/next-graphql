"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetchPosts from "@/services/fetchPosts";
import Dropdown from "./Dropdown";
import PostList from "./PostList";
import { Post } from "@/types/post";

const PostListContainer = () => {
  const queryClient = useQueryClient();

  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >("");

  const [posts, setPosts] = useState<Post[]>(
    queryClient.getQueryData(["posts", ""]) || []
  );

  const { mutate } = useMutation({
    mutationKey: ["posts"],
    mutationFn: (catId?: string) => fetchPosts(catId),
    onSuccess: (data) => setPosts(data),
  });

  const handleCategoryChange = (catId: string) => {
    setSelectedCategoryId(catId);
    mutate(catId || undefined);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Blog Home</h1>
      <Dropdown
        selectedCategoryId={selectedCategoryId}
        onCategoryChange={handleCategoryChange}
      />
      <PostList posts={posts} />
    </main>
  );
};

export default PostListContainer;
