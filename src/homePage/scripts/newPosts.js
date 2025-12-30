import { posts } from "../../../data/posts.js";

export function renderNewPosts() {
  if (!posts || posts.length === 0) return;

  const newPosts = posts.slice(0, 2);

  const newPostsHTML = newPosts
    .map((post) => {
      return `
        <article class="n-brick-layout">
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

  document.querySelector(".js-new-section-grid").innerHTML = newPostsHTML;
}
