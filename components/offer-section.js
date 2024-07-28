export class OfferSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const offerSection = document.createElement("div");

    const offerSectionTemplate = document.createElement("template");
    offerSectionTemplate.innerHTML = `
    <div id="offer-section">
      <div id="offer-section-inner-container">
        <div id="offer-section-heading-container">
          <h2 id="offers-heading">შეთავაზებები</h2>
          <a>
            <div id="offers-link-container">
              <img src="../images/right-arrow-blue.svg"/>
              <span>ყველა შეთავაზება</span>
            </div>
          </a>
        </div>
        
        <div id="offer-slider">
          
          <div class="slide-item">
            <div class="slide-banner-container" id="slide-banner-1">
              <img class="company-logo" src="../images/iveria-beach.png"/>
            </div>
            <div class="slide-content-container">
              <p class="slide-category">ჯაზ ფესტივალის შეთავაზებები</p>
              <h3 class="slide-title">IVERIA BEACH - დაიბრუნეთ 30%</h3>
            </div>
          </div>

          <div class="slide-item">
            <div class="slide-banner-container" id="slide-banner-2">
              <img class="company-logo" src="https://static.tbcconcept.ge/desktop/media/gdqxnfqy.f1stegeta-03.png"/>
            </div>
            <div class="slide-content-container">
              <div class="slide-category-container">
                <p class="slide-category">ავტო</p> 
                <p class="slide-category">თეგეტა მოტორსი</p> 
              </div>
              <h3 class="slide-title">თეგეტა მოტორსი - 50% ფასდაკლება</h3>
            </div>
          </div>

          <div class="slide-item">
            <div class="slide-banner-container" id="slide-banner-3">
              <img class="company-logo" src="https://static.tbcconcept.ge/desktop/media/gdqxnfqy.f1stegeta-03.png"/>
            </div>
            <div class="slide-content-container">
              <div class="slide-category-container">
                <p class="slide-category">ავტო</p> 
                <p class="slide-category">ჯაზ ფესტივალის შეთავაზებები</p>
                <p class="slide-category">თეგეტა მოტორსი</p> 
              </div>
              <h3 class="slide-title">თეგეტა მოტორსი ბათუმი</h3>
            </div>
          </div>

          <div class="slide-item">
            <div class="slide-banner-container" id="slide-banner-4">
              <img class="company-logo" src="https://static.tbcconcept.ge/desktop/media/qsmk5hj0.syw1687956823190.400x300_Logo__1_%201.png"/>
            </div>
            <div class="slide-content-container">
              <div class="slide-category-container">
                <p class="slide-category">დასვენება</p> 
                <p class="slide-category">ვიზა</p> 
                <p class="slide-category">ჯაზ ფესტივალის შეთავაზებები</p> 
              </div>
              <h3 class="slide-title">Le Meridien Batumi — 10%-იანი ფასდაკლება</h3>
            </div>
          </div>

          <div class="slide-item">
            <div class="slide-banner-container" id="slide-banner-5">
              <img class="company-logo" src="https://static.tbcconcept.ge/desktop/media/kv2yas1n.nrl1687793548636.400x300_Logo__3_%201.png"/>
            </div>
            <div class="slide-content-container">
              <div class="slide-category-container">
                <p class="slide-category">დასვენება</p> 
                <p class="slide-category">ვიზა</p> 
                <p class="slide-category">ჯაზ ფესტივალის შეთავაზებები</p> 
              </div>
              <h3 class="slide-title">Colosseum Marina Hotel — 15%-იანი ფასდაკლება</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;

    offerSection.appendChild(offerSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/offer-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(offerSection);
  }

  connectedCallback() {
    this.createSlider();
  }

  createSlider() {
    const slider = this.shadowRoot.querySelector("#offer-slider");
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

customElements.define("offer-section", OfferSection);
