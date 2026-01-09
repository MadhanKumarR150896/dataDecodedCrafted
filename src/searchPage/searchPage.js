import { fetchSearchResults } from "../../data/posts";
import { renderSearchMessage, renderSearchResults } from "./results";

async function loadSearchPage() {
  const url = new URL(window.location.href);
  const search = url.searchParams.get("q") || "";
  const searchTerm = search
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\#\.\+\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  renderSearchMessage(searchTerm);

  try {
    const response = await Promise.allSettled([fetchSearchResults(searchTerm)]);

    const searchPosts =
      response[0]?.status === "fulfilled" && response[0].value !== null
        ? response[0].value
        : [];

    renderSearchResults(searchPosts);
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }
}

loadSearchPage();
