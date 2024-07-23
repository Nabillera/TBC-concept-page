export class FiguresSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const figuresSection = document.createElement("div");

    const figuresSectionTemplate = document.createElement("template");
    figuresSectionTemplate.innerHTML = `
    <div id="figures-section">
        <div id="figures-list-container">
            <div class="figures-item">
              <div class="figures-item-number">94 750</div>
              <p class="figures-item-caption">მომხმარებელი</p>
            </div>
            <div class="figures-item">
              <div class="figures-item-number">150+</div>
              <p class="figures-item-caption">ღონისძიება</p>
            </div>
            <div class="figures-item">
              <div class="figures-item-number">130+</div>
              <p class="figures-item-caption">შეთავაზება</p>
            </div>
        </div>
    </div>
    `;

    figuresSection.appendChild(figuresSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/figures-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(figuresSection);
  }
}

customElements.define("figures-section", FiguresSection);
