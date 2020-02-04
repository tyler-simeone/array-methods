import businesses from "./data.js";
import HTML from "./htmlManager.js";

const DOM = {
    renderToDom() {
        const containerEl = document.querySelector("#container");

        businesses.forEach(biz => {
            containerEl.innerHTML += HTML.createHTML(biz);
        })
    }
}

export default DOM 