import businesses from "./data.js";
import HTML from "./htmlManager.js";

const containerEl = document.querySelector("#container");

const DOM = {
    renderAllToDom() {
        const header = document.querySelector("h1");
        header.innerHTML = "Active Businesses";

        businesses.forEach(biz => {
            containerEl.innerHTML += HTML.createHTML(biz);
        })
    },
    renderNyToDom() {
        const header = document.querySelector("h1");
        header.innerHTML = "New York Businesses";

        businesses.filter(biz => {
            if (biz.addressStateCode === "NY") {
                containerEl.innerHTML += HTML.createHTML(biz);
            }
        })
    },
    renderManufacturing() {
        const header = document.querySelector("h1");
        header.innerHTML = "Manufacturing Companies";

        businesses.filter(biz => {
            if (biz.companyIndustry === "Manufacturing") {
                return containerEl.innerHTML += HTML.createHTML(biz);
            }
        })
    },
    renderPurchasingAgents() {
        const header = document.querySelector("h1");
        header.innerHTML = "Purchasing Agents";

        const agents = businesses.map(business => {
            return 
                {
                    "fullName": "${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}",
                    "company": "${business.companyName}",
                    "phoneNumber": "${business.phoneWork}"
                }
            
        });
        agents.forEach(agent => {
            containerEl.innerHTML += agent;
            containerEl.innerHTML += `<hr/>`;
        });
    }
}

export default DOM 