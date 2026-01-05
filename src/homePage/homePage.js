import { subtitleAnimation } from "./scripts/subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderContentSection } from "./scripts/content.js";

async function loadHomePage() {
  subtitleAnimation();
  try {
    let response;

    const savedData = JSON.parse(localStorage.getItem("savedData"));
    const expiry = Date.now() - JSON.parse(localStorage.getItem("savedTime"));

    if (savedData && savedData.length > 0 && expiry < 300000) {
      response = savedData;
    } else {
      response = await Promise.allSettled([
        fetchFeaturedPost(),
        fetchNewAndRecentPosts(),
      ]);

      localStorage.setItem("savedData", JSON.stringify(response));
      localStorage.setItem("savedTime", JSON.stringify(Date.now()));
    }

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
