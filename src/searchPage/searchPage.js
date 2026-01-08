import { fetchSearchResults } from "../../data/posts";
import { renderSearchResults } from "./results";

async function loadSearchPage() {
  try {
    const url = new URL(window.location.href);
    const searchTerm = url.searchParams.get("q") || "";
    const search = searchTerm
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s\#\.\+\-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const response = await Promise.allSettled([fetchSearchResults(search)]);

    const searchPosts =
      response[0]?.status === "fulfilled" && response[0].value !== null
        ? response[0].value
        : [];

    renderSearchResults({ search, searchPosts });
  } catch (error) {
    console.log("Unexpected error: Please try again");
    console.log(error);
  }
}

loadSearchPage();
