import { client } from "./sanity";

class Post {
  id;
  image;
  publishedAt;
  slug;
  tag;
  title;
  keywords;

  constructor(postData) {
    this.id = postData.id;
    this.image = postData.image;
    this.publishedAt = postData.publishedAt;
    this.slug = postData.slug;
    this.tag = postData.tag;
    this.title = postData.title;
    this.keywords = postData.keywords;
  }
}

const queryProjection = `{"id":_id,publishedAt,"slug": slug.current,title,"tag": postTag->tag,image,keywords}`;

export async function fetchNewAndRecentPosts() {
  const query = `*[_type == 'post'] | order(publishedAt desc)[0...10]${queryProjection}`;

  const data = await client.fetch(query);
  return data.map((postData) => {
    return new Post(postData);
  });
}

export async function fetchFeaturedPost() {
  const query = `*[_type == 'post' && featured] | order(publishedAt desc)[0]${queryProjection}`;

  const postData = await client.fetch(query);
  return new Post(postData);
}

export async function fetchSearchResults(search) {
  const query = `*[_type == "post" && (keywords[] match $param || title match $param)] | order(publishedAt desc)[0...8]${queryProjection}`;

  const data = await client.fetch(query, { param: `${search}*` });

  return data.map((postData) => {
    return new Post(postData);
  });
}
