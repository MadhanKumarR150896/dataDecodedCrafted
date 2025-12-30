import { subtitleAnimation } from "./scripts/subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderMainSection } from "./scripts/main.js";

async function loadHomePage() {
  subtitleAnimation();
  try {
    const [featuredPost, latestPosts] = await Promise.all([
      fetchFeaturedPost(),
      fetchNewAndRecentPosts(),
    ]);

    renderMainSection({ featuredPost, latestPosts });
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }
}

loadHomePage();
