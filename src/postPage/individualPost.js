import { toHTML } from "@portabletext/to-html";
import { urlFor } from "../../data/sanity";
import dayjs from "dayjs";
import { renderSummarySection } from "./summary";

export function renderIndividualPost(individualPost) {
  if (!individualPost) {
    return;
  }

  const actualUrl = `/post?p=${individualPost.slug}`;
  if (window.location.search !== actualUrl) {
    window.history.replaceState(null, "", actualUrl);
  }

  const heroSection = document.querySelector(".js-hero-section");
  const summarySection = document.querySelector(".js-summary-section");

  heroSection.innerHTML = renderHeroSection(individualPost);

  summarySection.innerHTML = renderSummarySection(individualPost.summary);
}

function renderHeroSection(post) {
  document.querySelector(".js-hero-section").classList.remove("is-loading");
  return `
    <div class="post-main">
      <div class="image-container">
        <img class="post-image" width="1200" height="600" src="${urlFor(post.image).width(1200).height(600).url()}"
        srcset="
          ${urlFor(post.image).width(400).height(200).url()} 400w,
          ${urlFor(post.image).width(800).height(400).url()} 800w,
          ${urlFor(post.image).width(1200).height(600).url()} 1200w,
          ${urlFor(post.image).width(1600).height(800).url()} 1600w,
          ${urlFor(post.image).width(2000).height(1000).url()} 2000w"
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 112px), 20vw
        alt="${post.image.alt || "Main-Image"}" />
      </div>
      <h1 class="post-title">${post.title}</h1>
    </div>
    <div class="post-details">
      <p class="post-date">${dayjs(post.publishedAt).format(
        "MMMM DD, YYYY",
      )}</p>
      <p class="post-tag">${post.tag}</p>
      <p class="post-author">${post.author}</p>
    </div>
  `;
}
