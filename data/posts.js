import { client, urlFor } from "./sanity";
import dayjs from "dayjs";

class Post {
  id;
  image;
  publishedAt;
  slug;
  tag;
  title;

  constructor(postData) {
    this.id = postData.id;
    this.image = postData.image;
    this.publishedAt = postData.publishedAt;
    this.slug = postData.slug;
    this.tag = postData.tag;
    this.title = postData.title;
  }

  getUrl() {
    return urlFor(this.image);
  }

  getDateString() {
    return dayjs(this.publishedAt).format("MMMM DD, YYYY");
  }
}

export let posts = [];

const queryNewAndRecentPosts = `*[_type == 'post'] | order(publishedAt desc) [0...10] {"id":_id,publishedAt,"slug": slug.current,title,"tag": postTag->tag,image}`;

export async function fetchNewAndRecentPosts() {
  const data = await client.fetch(queryNewAndRecentPosts);
  posts = data.map((postData) => {
    return new Post(postData);
  });
  return posts;
}

export let featuredPost = "";

const queryFeaturedPost = `*[_type == 'post' && featured] | order(publishedAt desc)[0] {"id":_id,publishedAt,"slug": slug.current,title,"tag": postTag->tag,image}`;

export async function fetchFeaturedPost() {
  const postData = await client.fetch(queryFeaturedPost);
  featuredPost = new Post(postData);
  return featuredPost;
}
