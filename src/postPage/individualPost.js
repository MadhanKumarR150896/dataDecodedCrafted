import { urlFor } from "../../data/sanity";
import dayjs from "dayjs";
import { renderSummarySection } from "./postSummary";
import { renderContentSection } from "./postContent";

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
  const contentSection = document.querySelector(".js-content-section");

  heroSection.innerHTML = renderHeroSection(individualPost, heroSection);

  summarySection.innerHTML = renderSummarySection(
    individualPost.summary,
    summarySection,
  );

  contentSection.innerHTML = renderContentSection(
    individualPost.content,
    contentSection,
  );
}

function renderHeroSection(
  { image, title, publishedAt, tag, author },
  section,
) {
  section.classList.remove("is-loading");
  return `
    <div class="post-main">
      <div class="image-container">
        <img class="post-image" width="1200" height="600" src="${urlFor(image).width(1200).height(600).url()}"
        srcset="
          ${urlFor(image).width(400).height(200).url()} 400w,
          ${urlFor(image).width(800).height(400).url()} 800w,
          ${urlFor(image).width(1200).height(600).url()} 1200w,
          ${urlFor(image).width(1600).height(800).url()} 1600w,
          ${urlFor(image).width(2000).height(1000).url()} 2000w"
          sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1023px) calc(100vw - 112px), 20vw
        alt="${image.alt || "Main-Image"}" />
      </div>
      <h1 class="post-title">${title}</h1>
    </div>
    <div class="post-details">
      <p class="post-date">${dayjs(publishedAt).format("MMMM DD, YYYY")}</p>
      <p class="post-tag">${tag}</p>
      <p class="post-author">${author}</p>
    </div>
  `;
}
