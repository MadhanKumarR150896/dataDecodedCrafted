import { sortedPosts } from "../../../data/mockPosts";
import dayjs from "dayjs";

export function renderFeaturedPost() {
  if (!sortedPosts || sortedPosts.length === 0) return;

  const featuredPost = sortedPosts.find((post) => {
    return post.featured;
  });

  const featuredPostHtml = `
        <article class="f-brick-layout">
          <div class="brick-thumbnail">
            <img src="${featuredPost.image}" alt="Content-Image">
            <div class="brick-tag">${featuredPost.tag}</div>
          </div>
          <div class="brick-details">
            <h3 class="brick-title">
              <a href="" class="brick-link">${featuredPost.title}</a>
            </h3>
            <p class="brick-date">${dayjs
              .unix(featuredPost.createdAt)
              .format("MMMM DD, YYYY")}</p>
          </div>
        </article>
      `;

  document.querySelector(".js-featured-section-grid").innerHTML =
    featuredPostHtml;
}
