class GlobalFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer wrapper">
        <div class="footer-content">
          <a href="">
            <img class="linkedin-icon" src="/images/linkedin-icon.svg" alt="LinkedIn_Icon">
          </a>

          <p>&copy; 2025 Data Decoded & Crafted &#124; All rights reserved</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("global-footer", GlobalFooter);
