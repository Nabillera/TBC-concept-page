export class ProductSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const productSection = document.createElement("div");

    const productSectionTemplate = document.createElement("template");
    productSectionTemplate.innerHTML = `
      <div id="product-section">
        <div id="product-section-inner-container">
          <div id="product-section-heading-container">
            <h2 id="products-heading">პროდუქტები</h2>
          </div>

          <div id="product-slider">
            <div class="product-slide-item">
              <div class="product-banner-container" id="product-banner-1"></div>
              <div class="product-slide-content-container">
                <h3 class="product-slide-title">ციფრული</h3>
                <p class="product-slide-description">
                თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც <b>საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია</b>, ვინც აქტიურად მოიხმარს <b>არასაბანკო პროდუქტებსა და შეთავაზებებს</b> და ვისაც ურჩევნია დამოუკიდებლად, პირადი ბანკირის გარეშე მართოს საკუთარი ფინანსები და საბანკო ოპერაციები.
                </p>
              </div>
            </div>

            <div class="product-slide-item">
              <div class="product-banner-container" id="product-banner-2"></div>
              <div class="product-slide-content-container">
                <h3 class="product-slide-title">პრემიუმი</h3>
                <p class="product-slide-description">
                თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - <b>პრემიუმ ნაკრები</b>, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, პირადი ბანკირის მომსახურებას გულისხმობს. პირადი ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა.
                </p>
              </div>
            </div>

            <div class="product-slide-item">
              <div class="product-banner-container" id="product-banner-3"></div>
              <div class="product-slide-content-container">
                <h3 class="product-slide-title">360</h3>
                <p class="product-slide-description">
                <b>თიბისი კონცეპტის 360</b> ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად, კიდევ უფრო <b>მეტი ფინანსური ინსტრუმენტი</b> და გაზრდილი შესაძლებლობები ესაჭიროება
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    productSection.appendChild(productSectionTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/product-section.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(productSection);
  }

  connectedCallback() {
    this.createSlider();
  }

  createSlider() {
    const slider = this.shadowRoot.querySelector("#product-slider");
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

customElements.define("product-section", ProductSection);
