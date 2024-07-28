export class BundleSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const bundleSection = document.createElement("div");

    const bundleSectionTemplate = document.createElement("template");
    bundleSectionTemplate.innerHTML = `
    <div id="bundle-section">
      <div id="bundle-section-inner-container">
        <div>
          <h2>შეარჩიეთ ნაკრები</h2>
        </div>

        <div id="bundle-items-container">

          <div id="bundle-item-wrapper-1">
            <div class="bundle-items" id="bundle-item-1"></div>
            <div class="bundle-item-content-container">
                <h3 class="bundle-name">ციფრული</h3>
                <div class="bundle-item-link">
                  <img class="bundle-arrow-white" src="../images/right-arrow-white.svg"/>
                  <a class="see-more-link" href="https://tbcconcept.ge/ge/singleview/245-digital-kit">იხილეთ მეტი</a>
                </div>
              </div>
          </div>

          <div id="bundle-item-wrapper-2">
            <div class="bundle-items" id="bundle-item-2"></div>
            <div class="bundle-item-content-container">
                <h3 class="bundle-name">360</h3>
                <div class="bundle-item-link">
                  <img class="bundle-arrow-white" src="../images/right-arrow-white.svg"/>
                  <a class="see-more-link" href="https://tbcconcept.ge/ge/singleview/3301-concept-360">იხილეთ მეტი</a>
                </div>
              </div>
          </div>

          <div id="bundle-item-wrapper-3">
            <div class="bundle-items" id="bundle-item-3"></div>
            <div class="bundle-item-content-container">
                <h3 class="bundle-name">პრემიუმი</h3>
                <div class="bundle-item-link">
                  <img class="bundle-arrow-white" src="../images/right-arrow-white.svg"/>
                  <a class="see-more-link" href="https://tbcconcept.ge/ge/singleview/3300-premium-kit">იხილეთ მეტი</a>
                </div>
              </div>
          </div>

        </div>
      </div>
    </div>
    `;

    bundleSection.appendChild(bundleSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/bundle-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(bundleSection);
  }
}

customElements.define("bundle-section", BundleSection);
