import DOM from "./domManager.js"

// DOM.renderAllToDom();
// DOM.renderPurchasingAgents();
// DOM.renderNyToDom();
// DOM.renderManufacturing();
// onClick();

const btn = document.querySelector("#searchBtn");
btn.addEventListener("click", () => DOM.renderCompany());
