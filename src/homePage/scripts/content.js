export function renderContentSection(allPosts) {
  const { featuredPost, latestPosts } = allPosts;

  //featured post
  if (featuredPost && featuredPost !== null) {
    document.querySelector(".js-featured-section-grid").innerHTML =
      renderFeaturedPost(featuredPost);
  } else if (latestPosts && latestPosts.length > 0) {
    const altPost = latestPosts[0];

    document.querySelector(".js-featured-section-grid").innerHTML =
      renderFeaturedPost(altPost);
  }

  //new posts
  if (latestPosts && latestPosts.length > 0) {
    const newPosts = latestPosts.slice(0, 2);

    document.querySelector(".js-new-section-grid").innerHTML = newPosts
      .map((newPost) => renderNewPost(newPost))
      .join("");
  }

  //recent posts
  if (latestPosts && latestPosts.length >= 3) {
    const recentPosts = latestPosts.slice(2);

    document.querySelector(".js-recent-section-grid").innerHTML = recentPosts
      .map((recentPost) => renderRecentPost(recentPost))
      .join("");
  }
}

function renderFeaturedPost(post) {
  return ` 
    <article class="f-brick-layout">
      ${postHtml(post)}
    </article>
  `;
}

function renderNewPost(post) {
  return ` 
    <article class="n-brick-layout">
      ${postHtml(post)}
    </article>
  `;
}

function renderRecentPost(post) {
  return ` 
    <article class="r-brick-layout">
      ${postHtml(post)}
    </article>
  `;
}

function postHtml(post) {
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
