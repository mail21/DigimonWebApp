class DigiItem extends HTMLElement{
    constructor(){
        super()
    }

    connectedCallback(){
        this.setAttribute("class", "row mt-5 ml-2 mb-3 ")
    }

    tampilDigimon(pageAktif,respon){
        this.innerHTML = "";
        for (let i = pageAktif; i < pageAktif+20; i++) {
            if(respon[i] === undefined){
                break;
            }
            this.innerHTML += `
                <digi-card class="card ">
                    <img src="${respon[i].img}" class="card-img-top" alt="No Image">
                    <div class="card-body">
                        <h5 class="card-title">${respon[i].name}</h5>
                        <p class="card-text">${respon[i].level}</p>
                    </div>
                </digi-card>`
        }
    }
}

customElements.define("digi-item",DigiItem)