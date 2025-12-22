class GlobalHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.renderHTML();
    this.defineElements();
    this.responsiveSideMenu();
  }

  renderHTML() {
    this.innerHTML = `
      <header class="header wrapper">
        <div class="header-content">
          <a class="header-left" href="/">
            <img class="ddc-logo" src="/images/DDC_logo.png" alt="DDC_Logo">
          </a>

          <button class="menu-button">
            <img class="menu-icon" src="/images/menu-icon.svg" alt="">
          </button>

          <nav class="header-right">
            <button class="close-button">
              <img class="close-icon" src="/images/close-icon.svg" alt="">
            </button>

            <ul class="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="#explore-section">Explore</a></li>
              <li><a href="/">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div class="overlay"></div>
    `;
  }

  defineElements() {
    this.headerRight = this.querySelector(".header-right");
    this.overlay = this.querySelector(".overlay");
    this.menuButton = this.querySelector(".menu-button");
  }

  openMenu() {
    this.headerRight.classList.add("visible");
    this.overlay.classList.add("visible");
    this.headerRight.setAttribute("aria-hidden", "false");
    this.menuButton.setAttribute("aria-expanded", "true");
  }

  closeMenu() {
    this.headerRight.classList.remove("visible");
    this.overlay.classList.remove("visible");
    this.headerRight.setAttribute("aria-hidden", "true");
    this.menuButton.setAttribute("aria-expanded", "false");
  }

  responsiveSideMenu() {
    this.addEventListener("click", (event) => {
      if (
        event.target.closest(".menu-button") &&
        !this.headerRight.classList.contains("visible")
      ) {
        this.openMenu();
        return;
      }
      if (
        (event.target.closest(".close-button") ||
          event.target.closest(".overlay") ||
          event.target.closest(".nav-links")) &&
        this.headerRight.classList.contains("visible")
      ) {
        this.closeMenu();
      }
    });

    this.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        this.headerRight.classList.contains("visible")
      ) {
        this.closeMenu();
      }
    });
  }
}

customElements.define("global-header", GlobalHeader);
