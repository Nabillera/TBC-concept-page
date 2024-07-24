export class AppDownload extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    const appDownload = document.createElement("div");

    const appDownloadTemplate = document.createElement("template");
    appDownloadTemplate.innerHTML = `
    <div id="app-download">
        <div id="app-download-inner-container">
          <h2 id="digital-bank-heading">ციფრული ბანკი</h2>
          <div id="illustration-wrapper"><img id="app-illustration" src="https://static.tbcconcept.ge/mobile/media/3sdx4uin.3qibankkk3.png"/></div>
          <p id="app-description">შეასრულეთ საბანკო ოპერაციები დისტანციურად, ციფრული ბანკის დახმარებით</p>
          <a id="app-download-button">
              <div id="app-download-button-content">
								<img src="../images/download-icon.svg"/>
								<span>DOWNLOAD</span>
              </div>
          </a>
          <div id="download-options">
            <a><div class="download-option-button">
              <img src="../images/google-play.svg"/>
            </div></a>

            <a><div class="download-option-button">
              <img src="../images/app-store.svg"/>
            </div></a>
          </div>
        </div>
    </div>
    `;

    appDownload.appendChild(appDownloadTemplate.content.cloneNode(true));

    const styleSheet = document.createElement("link");
    styleSheet.setAttribute("rel", "stylesheet");
    styleSheet.setAttribute("type", "text/css");
    styleSheet.setAttribute("href", "/styles/app-download.css");

    this.shadowRoot.appendChild(styleSheet);
    this.shadowRoot.appendChild(appDownload);
  }
}

customElements.define("app-download", AppDownload);
