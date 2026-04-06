import { toHTML } from "@portabletext/to-html";

const summaryComponent = {
  block: {
    normal: ({ children }) => {
      const cleanedText = children.replace(/&nbsp;|\u00A0/g, "").trim() === "";
      if (!children || cleanedText) {
        return "";
      }

      if (children.toLowerCase().startsWith("summary")) {
        return `<p class="summary-title">${children}</p>`;
      }

      return `<p>${children}</p>`;
    },
  },

  listItem: {
    bullet: ({ children }) => {
      const cleanedText = children.replace(/&nbsp;|\u00A0/g, "").trim() === "";
      if (!children || cleanedText) {
        return "";
      }

      return `<li>${children}</li>`;
    },
    number: ({ children }) => {
      const cleanedText = children.replace(/&nbsp;|\u00A0/g, "").trim() === "";
      if (!children || cleanedText) {
        return "";
      }

      return `<li>${children}</li>`;
    },
  },

  list: {
    bullet: ({ children }) => {
      const cleanedText = children.replace(/&nbsp;|\u00A0/g, "").trim() === "";
      if (!children || cleanedText) {
        return "";
      }

      return `<ul>
        ${children}
      </ul>`;
    },
    number: ({ children }) => {
      const cleanedText = children.replace(/&nbsp;|\u00A0/g, "").trim() === "";
      if (!children || cleanedText) {
        return "";
      }

      return `<ol>
        ${children}
      </ol>`;
    },
  },
};

export function renderSummarySection(summary, section) {
  section.classList.remove("is-loading");

  const summaryHtml = toHTML(summary, {
    components: summaryComponent,
  });

  if (!summaryHtml) {
    section.remove();
    return;
  }

  return summaryHtml;
}
