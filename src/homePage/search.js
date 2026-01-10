import { fetchSearchBoxResults } from "../../data/posts";

let timeoutId;

export async function renderSearchBoxResults(searchTerm) {
  clearTimeout(timeoutId);
  const dropDown = document.querySelector(".sr-drop");

  if (searchTerm === "") {
    dropDown.innerHTML = "";
    dropDown.classList.remove("searched");
    return;
  }

  timeoutId = setTimeout(async () => {
    const response = await Promise.allSettled([
      fetchSearchBoxResults(searchTerm),
    ]);

    let srPosts =
      response[0]?.status === "fulfilled" && response[0].value !== null
        ? response[0].value
        : [];

    if (srPosts.length > 0) {
      dropDown.classList.add("searched");

      dropDown.innerHTML = srPosts
        .map((srPost) => `<li><a href="">${srPost.title}</a></li>`)
        .join("");
    } else {
      dropDown.classList.remove("searched");
      dropDown.innerHTML = "";
    }
  }, 500);
}
