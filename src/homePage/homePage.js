import { subtitleAnimation } from "./scripts/subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderFeaturedPost } from "./scripts/featuredPost.js";
import { renderNewPosts } from "./scripts/newPosts.js";
import { renderRecentPosts } from "./scripts/recentPosts.js";

async function loadHomePage() {
  subtitleAnimation();
  try {
    await Promise.all([fetchFeaturedPost(), fetchNewAndRecentPosts()]);
  } catch (error) {
    console.log("Unexpected error. Please try again");
    console.log(error);
  }

  renderFeaturedPost();
  renderNewPosts();
  renderRecentPosts();
}

loadHomePage();
