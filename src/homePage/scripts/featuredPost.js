import { fetchFeaturedPost } from "../../../data/posts";
import { urlFor } from "../../../data/sanity";

import dayjs from "dayjs";

export async function renderFeaturedPost() {
  const featuredPost = await fetchFeaturedPost();

  if (!featuredPost || featuredPost.length === 0) return;

  const featuredPostHtml = `
        <article class="f-brick-layout">
          <div class="brick-thumbnail">
            <img src="${urlFor(featuredPost.image)}" alt="${
    featuredPost.image.alt
  }">
            <div class="brick-tag">${featuredPost.tag}</div>
          </div>
          <div class="brick-details">
            <h3 class="brick-title">
              <a href="" class="brick-link">${featuredPost.title}</a>
            </h3>
            <p class="brick-date">${dayjs(featuredPost.publishedAt).format(
              "MMMM DD, YYYY"
            )}</p>
          </div>
        </article>
      `;

  document.querySelector(".js-featured-section-grid").innerHTML =
    featuredPostHtml;
}
