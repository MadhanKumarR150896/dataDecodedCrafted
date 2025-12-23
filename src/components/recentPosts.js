import { posts } from "../../data/mockPosts.js";
import { sortPostArray } from "./utils/sortPosts.js";
import dayjs from "dayjs";

export function renderRecentPosts() {
  if (!posts || posts.length === 0) return;

  const recentPosts = sortPostArray(posts);

  const recentPostHTML = recentPosts
    .map((post) => {
      return `
        <article class="e-brick-layout">
          <div class="brick-thumbnail">
            <img src="${post.image}" alt="Content-Image">
            <div class="brick-tag">${post.tag}</div>
          </div>
          <div class="brick-details">
            <h3 class="brick-title">
              <a href="" class="brick-link">${post.title}</a>
            </h3>
            <p class="brick-date">${dayjs
              .unix(post.createdAt)
              .format("MMMM DD, YYYY")}</p>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelector(".js-explore-section-grid").innerHTML = recentPostHTML;
}
