export class FooterSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const footerSection = document.createElement("div");

    const footerSectionTemplate = document.createElement("template");
    footerSectionTemplate.innerHTML = `
    <div id="footer-section">

      <div id="footer-top-section">

        <div id="footer-top-inner-container">
          <img id="footer-top-tbc-logo" src="../images/tbc-logo-black.svg"/>
          <img id="footer-top-concept-logo" src="../images/concept-logo-black.svg"/>
          <div id="language-container">
            <img id="language-icon" src="../images/language-icon.svg"/>
            <span id="language-option">ქარ</span>
          </div>
        </div>
      </div>

      <div id="footer-middle-section">

        <div id="dropdown-list-container">
          <div class="dropdown-item" isOpen="false">
            <div class="dropdown-header">
              <a class="dropdown-title" href="https://tbcconcept.ge/ge/products/overview">პროდუქტები</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/products/kits">ნაკრები</a>
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/products/personalbanker">პერსონალური ნაკრები</a>
            </div>
          </div>
          <div class="dropdown-item" isOpen="false">
            <div class="dropdown-header">
              <a class="dropdown-title" href="https://tbcconcept.ge/ge/lifestyle/overview">Lifestyle</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/lifestyle/offers">შეთავაზებები</a>
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/lifestyle/events">ღონისძიებები</a>
            </div>
          </div>
          <div class="dropdown-item" isOpen="false">
            <div class="dropdown-header">
              <a class="dropdown-title" href="https://tbcconcept.ge/ge/concept-space/overview">კონცეპტის სივრცე</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/concept-space/library">ბიბლიოთეკა</a>
              <a class="dropdown-links" href="https://tbcconcept.ge/ge/concept-space/cafe">კაფე</a>
            </div>
          </div>
        </div>
        
        <div id="contact-main-container">
          <div id="contact-information-container">
            <p id="contact-heading">დაგვიკავშირდით:</p>
            <div id="contact-information-inner-container">
              <div class="contact-option-container">
                <img src="../images/telephone-icon.svg"/>
                <a class="contact-info-anchor">+995 32 2 27 27 00</a>
              </div>
              <div class="contact-option-container">
                <img src="../images/message-icon.svg"/>
                <a class="contact-info-anchor">info@tbcconcept.ge</a>
              </div>
              <div class="contact-option-container">
                <img src="../images/location-icon.svg"/>
                <a class="contact-info-anchor">ფილიალები</a>
              </div>
            </div>
          </div>

          <div id="social-media-container">
            <p id="social-media-heading">სოციალური ქსელები</p>
            <div id="social-links-container">
              <a href="https://www.facebook.com/tbcconcept">
                <div class="social-link"><img class="social-link-icon" src="../images/facebook-icon.svg"/></div>
              </a>
              <a href="https://www.instagram.com/tbc_concept/">
                <div class="social-link"><img class="social-link-icon" src="../images/instagram-icon.svg"/></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-bottom-section">

        <div id="footer-bottom-links-container">
          <span class="footer-bottom-links-item">კონფიდენციალურობა</span>
          <span class="footer-bottom-links-item">წესები და პირობები</span>
        </div>
        <div id="footer-bottom-logo-container">
          <img id="footer-bottom-logo" src="../images/tbc-logo-gray.svg"/>  
          <span>2024 ყველა უფლება დაცულია</span>
        </div>
      </div>
    </div>
    `;

    footerSection.appendChild(footerSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/footer-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(footerSection);
  }
}
customElements.define("footer-section", FooterSection);
