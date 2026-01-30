import { client } from "./sanity";

class Post {
  id;
  slug;
  title;

  constructor(postData) {
    this.id = postData.id;
    this.slug = postData.slug;
    this.title = postData.title;
  }
}

class PreviewPost extends Post {
  image;
  publishedAt;
  tag;

  constructor(postData) {
    super(postData);
    this.image = postData.image;
    this.publishedAt = postData.publishedAt;
    this.tag = postData.tag;
  }
}

class IndividualPost extends PreviewPost {
  author;
  summary;
  content;

  constructor(postData) {
    super(postData);
    this.author = postData.author;
    this.summary = postData.summary;
    this.content = postData.content;
  }
}

const queryProjection = `{"id":_id,publishedAt,"slug": slug.current,title,"tag": postTag->tag,image}`;

export async function fetchNewAndRecentPosts() {
  const query = `*[_type == 'post'] | order(publishedAt desc)[0...10]${queryProjection}`;

  const data = await client.fetch(query);
  return data.map((postData) => {
    return new PreviewPost(postData);
  });
}

export async function fetchFeaturedPost() {
  const query = `*[_type == 'post' && featured] | order(publishedAt desc)[0]${queryProjection}`;

  const postData = await client.fetch(query);
  return new PreviewPost(postData);
}

export async function fetchSearchBoxResults(searchTerm) {
  const query = `*[_type == "post" && (keywords[] match $param || title match $param)] | order(publishedAt desc)[0...4]{"id":_id,"slug": slug.current,title}`;

  const data = await client.fetch(query, { param: `${searchTerm}*` });

  return data.map((postData) => {
    return new Post(postData);
  });
}

export async function fetchSearchResults(searchTerm) {
  const query = `*[_type == "post" && (keywords[] match $param || title match $param)] | order(publishedAt desc)[0...8]${queryProjection}`;

  const data = await client.fetch(query, { param: `${searchTerm}*` });

  return data.map((postData) => {
    return new PreviewPost(postData);
  });
}

export async function fetchPost(postSlug) {
  const query = `*[_type == 'post' && slug.current match $param][0]{"id":_id,publishedAt,"slug":slug.current,title,"tag":postTag->tag,image,author,summary,content}`;

  const postData = await client.fetch(query, { param: `${postSlug}*` });
  return new IndividualPost(postData);
}
