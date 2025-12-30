import { posts } from "../../../data/posts.js";

export function renderRecentPosts() {
  if (!posts || posts.length === 0) return;

  const recentPosts = posts.slice(2);

  const recentPostHTML = recentPosts
    .map((post) => {
      return `
        <article class="e-brick-layout">
          <div class="brick-thumbnail">
            <img src="${post.getUrl()}" alt="${post.image.alt}">
            <div class="brick-tag">${post.tag}</div>
          </div>
          <div class="brick-details">
            <h3 class="brick-title">
              <a href="" class="brick-link">${post.title}</a>
            </h3>
            <p class="brick-date">${post.getDateString()}</p>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelector(".js-explore-section-grid").innerHTML = recentPostHTML;
}
