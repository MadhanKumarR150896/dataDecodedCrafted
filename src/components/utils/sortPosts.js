export function sortPostArray(array) {
  const sortedPosts = [...array];

  return sortedPosts.sort((a, b) => {
    return Number(b.createdAt) - Number(a.createdAt);
  });
}
