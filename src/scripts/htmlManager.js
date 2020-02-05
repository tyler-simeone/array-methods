const HTML = {
    createHTML(obj) {
        return `
            <section>
                <h2>${obj.companyName}</h2>
                <p>${obj.addressFullStreet}</p>
                <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode}</p>
                <hr/>
            </section>
        `
    },
    createNewHTML(obj, tot) {
        return `
            <section>
                <h2>${obj.companyName} ($${tot})</h2>
                <p>${obj.addressFullStreet}</p>
                <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode}</p>
                <hr/>
            </section>
        `
    }
}

export default HTML