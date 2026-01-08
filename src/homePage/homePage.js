import { subtitleAnimation } from "./subtitleAnimation.js";
import { fetchFeaturedPost, fetchNewAndRecentPosts } from "../../data/posts.js";
import { renderContentSection } from "./content.js";

async function loadHomePage() {
  subtitleAnimation();
  try {
    const savedData = JSON.parse(localStorage.getItem("savedData"));
    const validData = Array.isArray(savedData) && savedData.length === 2;

    const savedTime = JSON.parse(localStorage.getItem("savedTime"));
    const validTime =
      Number.isFinite(savedTime) && Date.now() - savedTime < 300000;

    let response;

    if (validData && validTime) {
      response = savedData;
    } else {
      localStorage.removeItem("savedData");
      localStorage.removeItem("savedTime");

      response = await Promise.allSettled([
        fetchFeaturedPost(),
        fetchNewAndRecentPosts(),
      ]);

      const isFulfilled = response.every((res) => res.status === "fulfilled");

      if (isFulfilled) {
        localStorage.setItem("savedData", JSON.stringify(response));
        localStorage.setItem("savedTime", JSON.stringify(Date.now()));
      }
    }

    let featuredPost =
      response[0]?.status === "fulfilled" && response[0].value !== null
        ? response[0].value
        : null;
    let latestPosts =
      response[1]?.status === "fulfilled" && response[1].value !== null
        ? response[1].value
        : [];

    renderContentSection({ featuredPost, latestPosts });
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }

  document.querySelector(".js-search-button").addEventListener("click", () => {
    const search = document.querySelector(".js-search-box").value;
    if (search !== "") {
      window.location.href = `search.html?q=${encodeURIComponent(search)}`;
    }
  });

  document
    .querySelector(".js-search-box")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const search = document.querySelector(".js-search-box").value;
        if (search !== "") {
          window.location.href = `search.html?q=${encodeURIComponent(search)}`;
        }
      }
    });
}

loadHomePage();
