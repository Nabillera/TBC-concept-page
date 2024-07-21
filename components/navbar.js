export class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const navbar = document.createElement("div");

    const template = document.createElement("template");
    template.innerHTML = `
    <header>
      <div id="navbar">
        <div>
          <a><img id="tbc-concept-logo" src="../images/concept-logo-gray.svg"/></a>
          <a><img id="tbc-logo" src="../images/tbc-logo-gray.svg"/></a>
        </div>

        <div id="desktop-navigation-container">
          <div class="desktop-navigation-options">პროდუქტები</div>
          <div class="desktop-navigation-options">შეთავაზებები</div>
          <div class="desktop-navigation-options">კონცეპტის სივრცე</div>
        </div>

        <div id="navigation-container">
          <img id="search-icon" src="../images/search-icon.svg"/>
          <div id="bundle-link-container">
            <img id="bundle-link-arrow" src="../images/right-arrow-blue.svg"/>
            <span id="bundle-link">გამოიწერეთ ნაკრები</span>
          </div>

          <div id="navbar-menu-container">
            <div id="menu-top-bar"></div>
            <div id="menu-middle-bar"></div>
            <div id="menu-bottom-bar"></div>
          </div>

          <div id="language-container">
            <img id="language-icon" src="../images/language-icon.svg"/>
            <span id="language-option">ქარ</span>
          </div>
        </div>
      </div>
    </header>
    `;

    navbar.appendChild(template.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("href", "/styles/navbar.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(navbar);
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#bundle-link-arrow")
      .addEventListener("mouseover", (e) => {
        e.target.setAttribute("fill", "#007aff");
      });

    console.log(this.shadowRoot.querySelector("#bundle-link-arrow"));
  }
}

customElements.define("nav-bar", Navbar);
