export class AwardSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const awardSection = document.createElement("div");

    const awardSectionTemplate = document.createElement("template");
    awardSectionTemplate.innerHTML = `
    <div id="award-section">
      <div id="award-section-inner-container">
        <div id="award-section-heading-container">
          <h2 id="awards-heading">ჯილდოები</h2>
        </div>

        <div id="award-slider">
          <div class="award-slide-item">
            <div class="award-logo" id="award-logo-1"></div>
            <h3 class="award-title">საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2024</h3>
            <p class="issuer">The Global Finance</p>
          </div>
        

          <div class="award-slide-item">
          <div class="award-logo" id="award-logo-2"></div>
            <h3 class="award-title">საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023</h3>
            <p class="issuer">Euromoney</p>
          </div>
        
          <div class="award-slide-item">
            <div class="award-logo" id="award-logo-3"></div>
            <h3 class="award-title">საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023</h3>
            <p class="issuer">The Global Finance</p>
          </div>
        
          <div class="award-slide-item">
          <div class="award-logo" id="award-logo-4"></div>
            <h3 class="award-title">საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023</h3>
            <p class="issuer">The Banker & PWM</p>
          </div>
        </div>
      </div>
    </div>
    `;

    awardSection.appendChild(awardSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/award-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(awardSection);
  }

  connectedCallback() {
    this.createSlider();
  }

  createSlider() {
    const slider = this.shadowRoot.querySelector("#award-slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}

customElements.define("award-section", AwardSection);
