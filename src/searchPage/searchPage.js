import { fetchSearchResults } from "../../data/posts";

async function loadSearchPage() {
  const url = new URL(window.location.href);
  const searchTerm = url.searchParams.get("q") || "";
  const search = searchTerm
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s\#\.\+\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const response = await fetchSearchResults(search);
  console.log(response);
}

loadSearchPage();
