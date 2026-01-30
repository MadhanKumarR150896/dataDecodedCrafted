import { urlFor } from "../../data/sanity";
import dayjs from "dayjs";

export function renderSearchMessage(searchTerm) {
  document.querySelector(".js-sr-section-title").textContent =
    `Showing results for "${searchTerm}"`;
}

export function renderSearchResults(searchPosts) {
  const srGrid = document.querySelector(".js-sr-section-grid");

  if (searchPosts && searchPosts.length === 0) {
    srGrid.classList.remove("is-loading");
    srGrid.innerHTML = `<p>No results found</p>`;
  }

  if (searchPosts && searchPosts.length > 0) {
    srGrid.classList.remove("is-loading");
    srGrid.innerHTML = searchPosts
      .map((searchPost) => renderPostHtml(searchPost))
      .join("");
  }
}

function renderPostHtml(post) {
  return `
    <article class="sr-brick-layout">
      <div class="brick-thumbnail">
        <img
        width="1200"
        height="600"
        src="${urlFor(post.image).width(1200).height(600).url()}"
        srcset="
        ${urlFor(post.image).width(400).height(200).url()} 400w,
        ${urlFor(post.image).width(800).height(400).url()} 800w,
        ${urlFor(post.image).width(1200).height(600).url()} 1200w,
        ${urlFor(post.image).width(1600).height(800).url()} 1600w,
        ${urlFor(post.image).width(2000).height(1000).url()} 2000w"
        sizes="(max-width: 767px) calc(100vw - 66px), (max-width: 1023px) 40vw, 20vw" 
        alt="${post.image.alt || "Main-Image"}"
        >
        <div class="brick-tag">${post.tag}</div>
      </div>
      <div class="brick-details">
        <h3 class="brick-title">
          <a href="/post?p=${post.slug}" class="brick-link">${post.title}</a>
        </h3>
        <p class="brick-date">${dayjs(post.publishedAt).format(
          "MMMM DD, YYYY",
        )}</p>
      </div> 
    </article>
  `;
}
