import { fetchPost } from "../../data/posts";
import { renderIndividualPost } from "./individualPost";

async function loadPostPage() {
  const url = new URL(window.location.href);
  const postSlug = url.searchParams.get("p");

  try {
    const response = await Promise.allSettled([fetchPost(postSlug)]);

    const individualPost =
      response[0]?.status === "fulfilled" && response[0]?.value !== null
        ? response[0].value
        : [];

    renderIndividualPost(individualPost);
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }
}

loadPostPage();
