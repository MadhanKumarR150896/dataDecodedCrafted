import { subtitleAnimation } from "./scripts/subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderFeaturedPost } from "./scripts/featuredPost.js";
import { renderNewPosts } from "./scripts/newPosts.js";
import { renderRecentPosts } from "./scripts/recentPosts.js";

async function loadHomePage() {
  subtitleAnimation();
  await fetchFeaturedPost();
  await fetchNewAndRecentPosts();
  renderFeaturedPost();
  renderNewPosts();
  renderRecentPosts();
}

loadHomePage();
