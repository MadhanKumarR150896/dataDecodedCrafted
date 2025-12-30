export function renderMainSection(allPosts) {
  const { featuredPost, latestPosts } = allPosts;

  if (featuredPost) {
    document.querySelector(".js-featured-section-grid").innerHTML = `
      <article class="f-brick-layout">
        ${renderPostHtml(featuredPost)}
      </article>
    `;
  }

  if (latestPosts) {
    const newPosts = latestPosts.slice(0, 2);

    document.querySelector(".js-new-section-grid").innerHTML = newPosts
      .map((newPost) => {
        return `
        <article class="n-brick-layout">
          ${renderPostHtml(newPost)}
        </article>
    `;
      })
      .join("");
  }

  if (latestPosts && latestPosts.length >= 3) {
    const recentPosts = latestPosts.slice(2);

    document.querySelector(".js-recent-section-grid").innerHTML = recentPosts
      .map((recentPost) => {
        return `
        <article class="r-brick-layout">
          ${renderPostHtml(recentPost)}
        </article>
    `;
      })
      .join("");
  }
}

function renderPostHtml(post) {
  return `
    <div class="brick-thumbnail">
      <img src="${post.getUrl()}" alt="${post.image.alt}">
      <div class="brick-tag">${post.tag}</div>
    </div>
    <div class="brick-details">
      <h3 class="brick-title">
        <a href="" class="brick-link">${post.title}</a>
      </h3>
      <p class="brick-date">${post.getDateString()}</p>
    </div> 
  `;
}
