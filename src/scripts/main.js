import DOM from "./domManager.js"

// DOM.renderAllToDom();
// DOM.renderPurchasingAgents();
// DOM.renderNyToDom();
// DOM.renderManufacturing();
DOM.renderOrderTot();

// Finds and displays company that user searches for...
const btn = document.querySelector("#searchBtn");
btn.addEventListener("click", () => DOM.renderCompany());
