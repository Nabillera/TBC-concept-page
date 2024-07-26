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
              <a class="dropdown-title">პროდუქტები</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a>ნაკრები</a>
              <a>პერსონალური ნაკრები</a>
            </div>
          </div>
          <div class="dropdown-item" isOpen="false">
            <div class="dropdown-header">
              <a class="dropdown-title">Lifestyle</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a>შეთავაზებები</a>
              <a>ღონისძიებები</a>
            </div>
          </div>
          <div class="dropdown-item" isOpen="false">
            <div class="dropdown-header">
              <a class="dropdown-title">კონცეპტის სივრცე</a>
              <img class="dropdown-arrow" src="../images/down-arrow-black.svg"/>
            </div>
            <div class="dropdown-container">
              <a>ბიბლიოთეკა</a>
              <a>კაფე</a>
            </div>
          </div>
        </div>
        
        <div id="contact-main-container">
          <div id="contact-information-container">
            <p id="contact-heading">დაგვიკავშირდით:</p>
            <div id="contact-information-inner-container">
              <div class="contact-option-container">
                <img src="../images/telephone-icon.svg"/>
                <a>+995 32 2 27 27 00</a>
              </div>
              <div class="contact-option-container">
                <img src="../images/message-icon.svg"/>
                <a>info@tbcconcept.ge</a>
              </div>
              <div class="contact-option-container">
                <img src="../images/location-icon.svg"/>
                <a>ფილიალები</a>
              </div>
            </div>
          </div>

          <div id="social-media-container">
            <p id="social-media-heading">სოციალური ქსელები</p>
            <div id="social-links-container">
              <a >
                <div class="social-link"><img src="../images/facebook-icon.svg"/></div>
              </a>
              <a >
                <div class="social-link"><img src="../images/instagram-icon.svg"/></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-bottom-section">

        <div id="footer-bottom-links-container">
          <span >კონფიდენციალურობა</span>
          <span>წესები და პირობები</span>
        </div>
        <div id="footer-bottom-logo-container">
          <img id="footer-bottom-logo" src="../images/tbc-logo-gray.svg"/>  
          <span>2024 ყველა უფლება დაცულია</span>
        </div>
      </div>
    </div>
    `;

    footerSection.appendChild(footerSectionTemplate.content.cloneNode(true));

    this.dropdowns = this.shadowRoot.querySelectorAll(".dropdown-item");
    this.headers = this.shadowRoot.querySelectorAll(".dropdown-header");
    this.contents = this.shadowRoot.querySelectorAll(".dropdown-container");

    this.headers.forEach((header) => {
      header.addEventListener("click", (event) => this.toggleDropdown(event));
    });

    // this.headers.forEach((header) => {
    //   header.addEventListener("click", (event) => {
    //     const clickedHeader = event.currentTarget;
    //     const clickedContent = clickedHeader.nextSibling;
    //     console.log(clickedHeader);
    //     console.log(clickedContent);

    //     this.contents.forEach((content) => {
    //       if (content !== clickedContent) {
    //         content.setAttribute("isOpen", false);
    //       }
    //     });
    //   });
    // });

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/footer-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(footerSection);
  }

  toggleDropdown(event) {
    const clickedHeader = event.currentTarget;
    const clickedContent = clickedHeader.nextElementSibling;
    console.log(clickedContent);

    this.contents.forEach((content) => {
      if (content !== clickedContent) {
        content.classList.remove("open");
      }
    });

    clickedContent.classList.toggle("open");
  }

  connectedCallback() {
    this.toggle();
  }

  toggle() {
    console.log("toggle");
  }
}
customElements.define("footer-section", FooterSection);
