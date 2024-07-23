export class HeroBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const heroBanner = document.createElement("div");

    const heroBannerTemplate = document.createElement("template");
    heroBannerTemplate.innerHTML = `
    <div id="hero">
      <div id="hero-container">

        <div id="hero-banner"></div>

        <div id="hero-banner-inner-container">
          <h1 id="hero-banner-h1">თიბისი კონცეპტი</h1>
          <p id="hero-banner-description">პერსონალური საბანკო მომსახურება, მორგებული თქვენს საჭიროებებსა და ინტერესებზე</p>
          
          <a id="hero-banner-button">
          <div id="hero-banner-button-content">
            <img src="../images/right-arrow-white.svg"/>
            <span>გამოიწერეთ</span>
          </div>
          </a>

        </div>
      </div>
    </div>
    `;

    heroBanner.appendChild(heroBannerTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/hero-banner.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(heroBanner);
  }
}

customElements.define("hero-banner", HeroBanner);
