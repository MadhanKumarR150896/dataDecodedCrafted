import { client } from "./sanity";

export let posts = [];

const queryNewAndRecentPosts = `*[_type == 'post'] | order(publishedAt desc) [0...10] {_id, author, featured, publishedAt,"slug": slug.current, title,"tag": postTag->tag, image}`;

export async function fetchNewAndRecentPosts() {
  posts = await client.fetch(queryNewAndRecentPosts);
  return posts;
}

export let featuredPost;

const queryFeaturedPost = `*[_type == 'post' && featured] | order(publishedAt desc) [0...1] {_id, author, featured, publishedAt,"slug": slug.current, title,"tag": postTag->tag, image}[0]`;

export async function fetchFeaturedPost() {
  featuredPost = await client.fetch(queryFeaturedPost);
  return featuredPost;
}
