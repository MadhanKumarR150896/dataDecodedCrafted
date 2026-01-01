import { urlFor } from "../../../data/sanity";
import dayjs from "dayjs";

export function renderContentSection(allPosts) {
  const { featuredPost, latestPosts } = allPosts;

  //featured post
  if (featuredPost && featuredPost !== null) {
    document.querySelector(".js-featured-section-grid").innerHTML =
      renderFeaturedPost(featuredPost);
  } else if (latestPosts && latestPosts.length > 0) {
    const altPost = latestPosts[0];

    document.querySelector(".js-featured-section-grid").innerHTML =
      renderFeaturedPost(altPost);
  }

  //new posts
  if (latestPosts && latestPosts.length > 0) {
    const newPosts = latestPosts.slice(0, 2);

    document.querySelector(".js-new-section-grid").innerHTML = newPosts
      .map((newPost) => renderNewPost(newPost))
      .join("");
  }

  //recent posts
  if (latestPosts && latestPosts.length >= 3) {
    const recentPosts = latestPosts.slice(2);

    document.querySelector(".js-recent-section-grid").innerHTML = recentPosts
      .map((recentPost) => renderRecentPost(recentPost))
      .join("");
  }
}

function renderFeaturedPost(post) {
  return renderPostHtml(
    post,
    "f-brick-layout",
    "(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 83vw, 60vw",
    "high",
    "eager"
  );
}

function renderNewPost(post) {
  return renderPostHtml(
    post,
    "n-brick-layout",
    "(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 38vw, 20vw",
    "auto",
    "lazy"
  );
}

function renderRecentPost(post) {
  return renderPostHtml(
    post,
    "r-brick-layout",
    "(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 38vw, 20vw",
    "auto",
    "lazy"
  );
}

function renderPostHtml(post, layout, sizes, fetchpriority, loading) {
  return `<article class="${layout}">
      <div class="brick-thumbnail">
        <img src="${urlFor(post.image).width(800).height(400).url()}"
        srcset = "
        ${urlFor(post.image).width(400).height(200).url()} 400w,
        ${urlFor(post.image).width(800).height(400).url()} 800w,
        ${urlFor(post.image).width(1200).height(600).url()} 1200w,
        ${urlFor(post.image).width(1600).height(800).url()} 1600w"
        sizes= "${sizes}" alt="${post.image.alt || "Main-Image"}"
        fetchpriority="${fetchpriority}"
        loading="${loading}"
        decoding="async">
        <div class="brick-tag">${post.tag}</div>
      </div>
      <div class="brick-details">
        <h3 class="brick-title">
          <a href="" class="brick-link">${post.title}</a>
        </h3>
        <p class="brick-date">${dayjs(post.publishedAt).format(
          "MMMM DD, YYYY"
        )}</p>
      </div> 
    </article>
    `;
}
