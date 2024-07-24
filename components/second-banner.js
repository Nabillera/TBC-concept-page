export class SecondBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const secondBanner = document.createElement("div");

    const secondBannerTemplate = document.createElement("template");
    secondBannerTemplate.innerHTML = `
      <div id="second-banner">
        <div id="second-banner-inner-container">
          <div id="second-banner-image"></div>
          <div id="second-banner-content">
            <h1 id="second-banner-h1">პირადი ბანკირი</h1>
            <p id="second-banner-description">თქვენი სანდო პარტნიორი ფინანსურ რჩევებსა და ოპერაციებში</p>
            <a id="learn-more-button">
              <div id="learn-more-button-content">გაიგეთ მეტი</div>
            </a>
          </div>
        </div>
      </div>
      `;

    secondBanner.appendChild(secondBannerTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/second-banner.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(secondBanner);
  }
}

customElements.define("second-banner", SecondBanner);
