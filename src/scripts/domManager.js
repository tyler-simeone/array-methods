import businesses from "./data.js";
import HTML from "./htmlManager.js";

const containerEl = document.querySelector("#container");

const DOM = {
    renderAllToDom() {
        businesses.forEach(biz => {
            containerEl.innerHTML += HTML.createHTML(biz);
        })
    },
    renderNyToDom() {
        businesses.filter(biz => {
            if (biz.addressStateCode === "NY") {
                containerEl.innerHTML += HTML.createHTML(biz);
            }
        })
    },
    renderManufacturing() {
        businesses.filter(biz => {
            if (biz.companyIndustry === "Manufacturing") {
                return containerEl.innerHTML += HTML.createHTML(biz);
            }
        })
    }
}

export default DOM 