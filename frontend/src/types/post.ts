import { Category } from "./category";

export type Post = {
  id: string;
  title: string;
  content: string;
  category: Category[];
};

export type PostsResponse = {
  posts: Post[];
};
