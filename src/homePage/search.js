import { fetchSearchBoxResults } from "../../data/posts";

let timeoutId;

export async function renderSearchBoxResults(searchTerm) {
  clearTimeout(timeoutId);

  if (searchTerm === "") return;
  timeoutId = setTimeout(async () => {
    const response = await fetchSearchBoxResults(searchTerm);
    console.log(response);
  }, 500);
}
