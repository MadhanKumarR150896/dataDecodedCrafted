import { posts } from "../../data/mockPosts";
import { sortPostArray } from "./utils/sortPosts";
import dayjs from "dayjs";

export function renderNewPosts() {
  if (!posts || posts.length === 0) return;

  const newPosts = sortPostArray(posts).slice(0, 2);

  const newPostsHTML = newPosts
    .map((post) => {
      return `
        <article class="n-brick-layout">
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

  document.querySelector(".js-new-section-grid").innerHTML = newPostsHTML;
}
