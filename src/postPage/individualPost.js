export function renderIndividualPost(individualPost) {
  const actualUrl = `/post?p=${individualPost.slug.current}`;

  if (window.location.search !== actualUrl) {
    window.history.replaceState(null, "", actualUrl);
  }

  console.log(individualPost);
}
