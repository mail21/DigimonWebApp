class ContainerInput extends HTMLElement{
    constructor(){
        super()
        this.render();
    }

    connectedCallback(){
        this.setAttribute("class", "input-group input-group-lg mb-3 none")
    }

    render(){
        this.innerHTML = `
        <input type="text" class="form-control input-keyword" placeholder="Cari Digimon" aria-label="Cari Digimon" aria-describedby="button-addon2">
        <div class="input-group-append">
            <button class="btn btn-outline-secondary search-button" type="button" id="button-addon2">Cari</button>
        </div>
        `
    }
}

customElements.define("container-input",ContainerInput)