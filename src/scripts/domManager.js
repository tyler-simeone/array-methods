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

        // returns new array of objects with more specific properties (not saving new obj vals)...
        // So I needed to remove backticks around the obj bc it was making the whole obj a string,
        // which I had a feeling of, but when I did that the obj went dark text like it wasn't being
        // read.. Kristen told me I needed to move the opening curly bracket for the obj up a line and
        // next to the return statement, THEN the obj started getting seen. The rest of my code works!
        const agents = businesses.map(business => {
            return {
                    "fullName": `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
                    "company": `${business.companyName}`,
                    "phoneNumber": `${business.phoneWork}`
                }
            
        });
        
        // Looping through new arr of objs and adding them to DOM in HTML format
        agents.forEach(agent => {
            containerEl.innerHTML += `
                <h2>${agent.fullName}</h2>
                <h3>${agent.company}</h3>
                <h3>${agent.phoneNumber}</h3>
            `;
            containerEl.innerHTML += `<hr/>`;
        });
    },
    renderCompany() {
        // event.preventDefault();

        // Couldn't get this code to work and it was bc I was searching
        // for elementById AND including the # ... 
        const inp = document.getElementById("companySearch").value;
        
        const company = businesses.find(biz => biz.companyName.toLowerCase() === inp.toLowerCase())

        containerEl.innerHTML = HTML.createHTML(company);
    },
    renderOrderTot() {
        const header = document.querySelector("h1");
        header.innerHTML += "Active Customers";

        businesses.forEach(biz => {
            const sum = (biz.orders.reduce((acc, crv) => acc + crv)).toFixed(2);

            containerEl.innerHTML += HTML.createNewHTML(biz, sum);
        })
    },
    renderBigSpender() {
        const header = document.querySelector("h1");
        header.innerHTML += "Big Spenders";

        const bigSpenders = businesses.filter(biz => {
            if (biz.orders.some(ord => ord > 9000)) {
                return biz;
            }
        })

        bigSpenders.forEach(biz => {
            containerEl.innerHTML += HTML.createHTML(biz);
        })
    }
}

export default DOM 