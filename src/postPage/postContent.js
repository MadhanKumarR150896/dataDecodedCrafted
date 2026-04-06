import { toHTML } from "@portabletext/to-html";
import { urlFor } from "../../data/sanity";

const contentComponent = {
  types: {
    subImage: ({ value }) => {
      return `
      <div class="content-image-container">
        <img width="1200" height="600" src="${urlFor(value).width(1200).height(600).url()}"
        srcset="
          ${urlFor(value).width(400).height(200).url()} 400w,
          ${urlFor(value).width(800).height(400).url()} 800w,
          ${urlFor(value).width(1200).height(600).url()} 1200w,
          ${urlFor(value).width(1600).height(800).url()} 1600w,
          ${urlFor(value).width(2000).height(1000).url()} 2000w"
          sizes="(max-width: 767px) calc(100vw - 96px), (max-width: 1023px) calc(100vw - 144px), 80vw
        alt="${value.alt || "Main-Image"}" />
      </div>`;
    },
    video: ({ value }) => {
      const { url } = value;

      if (url.includes("youtube.com")) {
        const id = url.split("v=").pop();

        return `
          <div class="content-video-container">
            <iframe src="https://www.youtube.com/embed/${id}" width="1200" height="600" title="Youtube video" frameborder="0" allowfullscreen referrer='strict-origin-when-cross-origin'></iframe>
          </div>
        `;
      }

      return `
        <div class="content-video-container">
          <video width="1200" height="600" controls>
            <source src='${url}' type='video/mp4'>
            Your browser does not support the video tag.
          </video>
        </div>
        `;
    },

    codeblock: ({ value }) => {
      return `
        <div class='content-code-container'>
          <pre>
            <code>${value.code}</code>
          </pre>
        </div>
      `;
    },
  },
};

export function renderContentSection(content, section) {
  section.classList.remove("is-loading");

  const contentHtml = toHTML(content, {
    components: contentComponent,
  });

  if (!contentHtml) {
    section.remove();
    return;
  }

  return contentHtml;
}
