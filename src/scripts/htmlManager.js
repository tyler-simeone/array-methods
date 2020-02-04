const HTML = {
    createHTML(obj) {
        return `
            <section>
                <h2>${obj.companyName}</h2>
                <p>${obj.addressFullStreet}</p>
                <p>${obj.addressCity}, ${obj.addressStateCode} ${obj.addressZipCode}</p>
            </section>
        `
    }
}

export default HTML