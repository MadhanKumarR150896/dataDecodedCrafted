import { subtitleAnimation } from "./scripts/subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderContentSection } from "./scripts/content.js";

async function loadHomePage() {
  subtitleAnimation();
  try {
    const response = await Promise.allSettled([
      fetchFeaturedPost(),
      fetchNewAndRecentPosts(),
    ]);

    let featuredPost =
      response[0].status === "fulfilled" && response[0].value !== null
        ? response[0].value
        : null;
    let latestPosts =
      response[1].status === "fulfilled" && response[1].value !== null
        ? response[1].value
        : [];

    renderContentSection({ featuredPost, latestPosts });
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }
}

loadHomePage();
