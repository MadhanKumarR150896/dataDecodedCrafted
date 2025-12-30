import { featuredPost } from "../../../data/posts";

export function renderFeaturedPost() {
  if (!featuredPost || featuredPost.length === 0) return;

  const featuredPostHtml = `
        <article class="f-brick-layout">
          <div class="brick-thumbnail">
            <img src="${featuredPost.getUrl()}" alt="${featuredPost.image.alt}">
            <div class="brick-tag">${featuredPost.tag}</div>
          </div>
          <div class="brick-details">
            <h3 class="brick-title">
              <a href="" class="brick-link">${featuredPost.title}</a>
            </h3>
            <p class="brick-date">${featuredPost.getDateString()}</p>
          </div>
        </article>
      `;

  document.querySelector(".js-featured-section-grid").innerHTML =
    featuredPostHtml;
}
